const { Op } = require("sequelize");

const { Flier, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const FlierController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const fliers = await Flier.findAll({
          attributes: ['id', 'first_name', 'middle_name', 'last_name', 'birthday', 'extensions', 'title', 'created_at', 'created_by', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(fliers);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const flier = await Flier.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'first_name', 'middle_name', 'last_name', 'birthday', 'extensions', 'title', 'created_at', 'created_by', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!flier) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(flier);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.FlierController = FlierController;