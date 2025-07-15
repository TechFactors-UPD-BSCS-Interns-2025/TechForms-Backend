const { Op } = require("sequelize");

const { FormType, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const FormTypeController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const form_types = await FormType.findAll({
          attributes: ['id', 'form_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(form_types);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const form_type = await FormType.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'form_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!form_type) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(form_type);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.FormTypeController = FormTypeController;