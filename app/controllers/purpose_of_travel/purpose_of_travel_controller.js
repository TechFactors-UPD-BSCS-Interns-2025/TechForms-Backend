const { Op } = require("sequelize");

const { PurposeOfTravel, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const PurposeOfTravelController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const purposes = await PurposeOfTravel.findAll({
          attributes: ['id', 'purpose_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(purposes);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const purpose = await PurposeOfTravel.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'purpose_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!purpose) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(purpose);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.PurposeOfTravelController = PurposeOfTravelController;