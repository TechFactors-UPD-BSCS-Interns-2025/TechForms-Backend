const { Op } = require("sequelize");

const { PurposeJunction, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');
const purpose_junction = require("../../models/purpose_junction");

const PurposeJunctionController = {

  create: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const purpose_junction = await PurposeJunction.create({
            'flight_request_id': req.body.flight_request_id,
            'purpose_id': req.body.purpose_id,
        }, {transaction: t});
        return res.status(CREATED).json({PurposeJunction: purpose_junction});
      } catch(error){
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message});         
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const purpose_junctions = await PurposeJunction.findAll({
          attributes: ['id', 'flight_request_id', 'purpose_id', 'created_by', 'created_at', 'updated_by', 'updated_at']
        });
        return res.json(purpose_junctions);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const purpose_junctions = await PurposeJunction.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'flight_request_id', 'purpose_id', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!purpose_junction) {
          return res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
        }

        return res.status(OK).json(purpose_junction);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
      }
    });
  },
  update: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const purpose_junction = await PurposeJunction.findOne({
          where: {id: req.params.id}
        });

        if(!purpose_junction){
          return res.status(NOT_FOUND).json({message: "Purpose Junction Not Found"});          
        } 
        await purpose_junction.update({
          flight_request_id: req.body.flight_request_id,
          purpose_id: req.body.purpose_id,
        }, {transaction: t});

        return res.status(OK).json({PurposeJunction: purpose_junction});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});
      }
    })
  },
  delete: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const purpose_junction = await PurposeJunction.findOne({
          where: {id: req.params.id}
        });

        if(!purpose_junction){
          return res.status(NOT_FOUND).json({message: "Purpose Junction Not Found"});          
        }
        
        await purpose_junction.destroy({
          // deleted_by: req.user.id
          force: false,
        }, {transaction: t});

        return res.status(OK).json({message: 'Purpose Junction Destroyed'});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});        
      }
    })
  }
};

module.exports.PurposeJunctionController = PurposeJunctionController;