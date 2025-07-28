const { Op } = require("sequelize");

const { ProgressUpdate, FormType, StatusType, BookingDetails, UserProfile, Flier, Approver, PurposeOfTravel ,FlightRequest, Request, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const RequestController = {
  create: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const request = await Request.create({
          'flight_request_id': req.body.flight_request_id,
          'form_id': req.body.form_id,
          'status_id': req.body.status_id,
          // 'created_by': req.user.id,
        }, 
        {transaction: t});
        return res.status(CREATED).json({Request: request});
      } catch(error){
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message})
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const requests = await Request.findAll({
          attributes: ['id', 'form_request_id', 'form_id', 'status_id']
        });
        return res.json(requests);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const request = await Request.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'form_id', 'status_id'],
            include: [
              {
                model: FormType,
                attributes: ['id', 'form_name'],
              },
              {
                model: StatusType,
                attributes: ['id', 'status_name'],
              },
              {
                model: ProgressUpdate,
                attributes: ['id', 'request_id', 'status_id', 'created_by', 'created_at', 'updated_by', 'updated_at'],
              },
              {
                model: FlightRequest,
                attributes: [
                  'id',
                  'purpose_others', 
                  'start_business', 
                  'end_business', 
                  'departure_date', 
                  'departure_time', 
                  'departure_city', 
                  'return_date', 
                  'return_time', 
                  'return_city',
                  'remarks', 
                  'booking_id',
                ],
                include: [
                  {
                    model: PurposeOfTravel,
                    attributes: ['id', 'purpose_name'],
                  },
                  {
                    model: Approver,
                    attributes: ['id', 'approver_name'],
                  },
                  {
                    model: Flier,
                    attributes: ['id', 'first_name', 'middle_name', 'last_name', 'birthday', 'extensions', 'title'],
                  },
                  {
                    model: UserProfile,
                    attributes: ['id', 'first_name', 'middle_name', 'last_name', 'department_id', 'role_id', 'profile_photo'],
                  },
                  {
                    model: BookingDetails,
                    attributes: ['departure_ref_no', 'departure_cost', 'departure_ticket_path', 'return_ref_no', 'return_cost', 'return_ticket_path'],
                  },
                ]
              },
            ],
          },
        );

        if (!request) {
          return res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });          
        }

        return res.status(OK).json(request);        
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });        
      }
    });
  },
  update: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const request = await Request.findOne({
          where: {id: req.params.id}
        });

        if(!request){
          return res.status(NOT_FOUND).json({message: "Request Not Found"});          
        } 
        await request.update({
          form_id: req.body.form_id,
          status_id: req.body.status_id,
          // updated_by: req.user.id
        }, {transaction: t});

        return res.status(OK).json({Request: request});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});
      }
    })
  },
  delete: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const request = await Request.findOne({
          where: {id: req.params.id}
        });

        if(!request){
          return res.status(NOT_FOUND).json({message: "Request Not Found"});          
        }
        
        await request.destroy({
          // deleted_by: req.user.id
          force: false,
        }, {transaction: t});

        return res.status(OK).json({message: 'Request Destroyed'});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});        
      }
    })
  }
};

module.exports.RequestController = RequestController;