const { Op } = require("sequelize");

const { FlightRequest, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const FlightRequestController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const flightRequests = await FlightRequest.findAll({
          attributes: [
            'id', 
            'profile_id', 
            'flier_id', 
            'purpose_id', 
            'purpose_others', 
            'start_business', 
            'end_business', 
            'departure_date', 
            'departure_time', 
            'departure_city', 
            'return_date', 
            'return_time', 
            'return_city', 
            'approver_id', 
            'remarks', 
            'booking_id', 
            'created_by', 
            'created_at', 
            'updated_by', 
            'updated_at', 
            'deleted_by', 
            'deleted_at',
        ]
        });
        res.json(flightRequests);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const flightRequest = await FlightRequest.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: [
                'id', 
                'profile_id', 
                'flier_id', 
                'purpose_id', 
                'purpose_others', 
                'start_business', 
                'end_business', 
                'departure_date', 
                'departure_time', 
                'departure_city', 
                'return_date', 
                'return_time', 
                'return_city', 
                'approver_id', 
                'remarks', 
                'booking_id', 
                'created_by', 
                'created_at', 
                'updated_by', 
                'updated_at', 
                'deleted_by', 
                'deleted_at',
            ]
          },
        );

        if (!flightRequest) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(flightRequest);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.FlightRequestController = FlightRequestController;