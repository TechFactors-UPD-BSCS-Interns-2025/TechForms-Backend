const { Op } = require("sequelize");

const { UserCredentials, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const UserCredentialsController = {
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
};

module.exports.UserCredentialsController = UserCredentialsController;