const { Op, ValidationErrorItemType } = require("sequelize");

const { Role, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');
const { message } = require("mailersend/src/modules/messages");


const RoleController = {
  create: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const role = await Role.create({
          'role_name': req.body.role_name,
        }, {transaction: t});
        res.status(OK).json({Roles: role})
      } catch(error){
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message})
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const roles = await Role.findAll({
          attributes: ['id', 'role_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(roles);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const role = await Role.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'role_name', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!role) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(role);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
  update: async (req, res) => {
    await sequelize.transaction(async(t) => {
      try {
        const role = await Role.findOne({
          where: { id: req.params.id }
        });

        if (!role) {
          res.status(NOT_FOUND).json({ message: "Role Not Found" });
        }

        await role.update({
          role_name: req.body.role_name,
        }, {transaction: t});

        return res.status(OK).json({Role: role});

      } catch(error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    })
  },
  delete: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const role = await Role.findOne({
          where: {id: req.params.id} 
        });

        if (!role) {
          res.status(NOT_FOUND).json({ message: 'Role Not Found' })
        }

        await role.destroy({
          force: false,
        }, {transaction: t});

        return res.status(OK).json({ message: 'Role Destroyed' });

      } catch(error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
      }
    })
  }
};

module.exports.RoleController = RoleController;