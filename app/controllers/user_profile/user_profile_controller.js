const { Op } = require("sequelize");

const { UserProfile, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const UserProfileController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const user_profiles = await UserProfile.findAll({
          attributes: ['id', 'first_name', 'middle_name', 'last_name', 'department_id', 'role_id', 'profile_photo', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(user_profiles);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const user_profile = await UserProfile.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'first_name', 'middle_name', 'last_name', 'department_id', 'role_id', 'profile_photo', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!user_profile) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(user_profile);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.UserProfileController = UserProfileController;