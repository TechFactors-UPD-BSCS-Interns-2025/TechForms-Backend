const { Op } = require("sequelize");

const { UserCredentials, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');
const user_credentials = require("../../models/user_credentials");
const { message } = require("mailersend/src/modules/messages");


const UserCredentialsController = {
  create: async (req, res) => {
    await sequelize.transaction(async(t) => {
      try {
        const user_credentials = await UserCredentials.create({
          'profile_id': req.body.profile_id,
          'username': req.body.username,
          'password': req.body.password,
          'email': req.body.email,
          'phone': req.body.phone,
        });
        res.status(OK).json({UserCredentials: user_credentials})
      } catch(error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const user_credentials = await UserCredentials.findAll({
          attributes: ['id', 'profile_id', 'username', 'password', 'email', 'created_by', 'phone', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(user_credentials);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const user_credentials = await UserCredentials.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'profile_id', 'username', 'password', 'email', 'created_by', 'phone', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!user_credentials) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(user_credentials);
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
        const user_credentials = await UserCredentials.findOne({
          where: { id: req.params.id }
        });

        if (!user_credentials) {
          res.status(NOT_FOUND).json({ message: 'User Credentials Not Found' });
        }

        await user_credentials.update({
          profile_id: req.body.profile_id,
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          phone: req.body.phone,
        }, {transaction: t})

        return res.status(OK).json({UserCredentials: user_credentials});
      } catch(error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    })
  },
  delete: async (req, res) => {
    await sequelize.transaction(async(t) => {
      try {
        const user_credentials = await UserCredentials.findOne({
          where: { id: req.params.id }
        })

        if (!user_credentials) {
          res.status(NOT_FOUND).json({ message: 'User Credentials Not Found' })
        }

        await user_credentials.destroy({
          force: false
        })
        res.status(OK).json({ message: 'User Credentials Destroyed' })
      } catch(error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    });
  }
};

module.exports.UserCredentialsController = UserCredentialsController;