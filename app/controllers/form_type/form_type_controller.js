const { Op } = require("sequelize");

const { FormType, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');
const { message } = require("mailersend/src/modules/messages");


const FormTypeController = {

  create: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const {form_name, created_by} = req.body;
        const newFormType = await FormType.create(
          {form_name, created_by},
          {transaction: t}
        );
        return res.status(CREATED).json(newFormType);
      } catch (error) {
        restart.status(INTERNAL_SERVER_ERROR).json({message: error.message});
        return;
      }
    });
  },
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
  update: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const {id} = req.params;
        const {status_name, updated_by} = req.body;
        const form_type = await FormType.findByPk(id)

        if (!form_type) {
          return res.status(NOT_FOUND).json({message: "Not found"})
        }

        await form_type.update(
          {form_name, updated_by},
          {transaction: t}
        );

        return res.status(OK).json(form_type)
      } catch (error) {
          res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
          return;
      }
    });
  },
  delete: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const {id} = req.params;
        const {deleted_by} = req.body;

        const form_type = await FormType.findByPk(id);

        if (!form_type){
          return res.status(NOT_FOUND).json({message: "Not found"})
        }

        await form_type.destroy(
          {
            // deleted_at: new Date(), deleted_by
            force: false

          },
          {transaction: t}
        )

        return res.status(OK).json({message: "Deleted succesfully"});
      } catch (error){
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
        return;
      }
    });
  }

};


module.exports.FormTypeController = FormTypeController;