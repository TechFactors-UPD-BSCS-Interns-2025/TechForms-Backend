const { Op } = require("sequelize");

const { StatusType, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const StatusTypeController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const status_types = await StatusType.findAll({
          attributes: ['id', 'status_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(status_types);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const status_type = await StatusType.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'status_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!status_type) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(status_type);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.StatusTypeController = StatusTypeController;