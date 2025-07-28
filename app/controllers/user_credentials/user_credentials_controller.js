const { Op } = require("sequelize");

const { Department, Role, UserCredentials, sequelize, UserProfile } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');



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
        return res.status(CREATED).json({UserCredentials: user_credentials})
      } catch(error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const user_credentials = await UserCredentials.findAll({
          attributes: ['id','username','password','email','phone'],
          include: [
            {
              model: UserProfile,
              attributes: ['id','first_name','middle_name','last_name','profile_photo'],
              include: [
                {
                  model: Department,
                  attributes: ['department_name']
                },
                {
                  model: Role,
                  attributes: ['role_name']
                }
              ]
            }
          ]
        });
      
        const formatted_users = user_credentials.map(account => {
          const profile = account.UserProfile
          return {
            id: account.id,
            username: account.username,
            password: account.password,
            email: account.email,
            phone: account.phone,
            first_name: profile?.first_name,
            middle_name: profile?.middle_name,
            last_name: profile?.last_name,
            department_name: profile?.Department?.department_name,
            role_name: profile?.Role?.role_name,
            profile_photo: profile?.profile_photo,
          }
        })
        return res.json(formatted_users);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
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
            attributes: ['id','username','password','email','phone'],
            include: [
              {
                model: UserProfile,
                attributes: [
                  'id',
                  'first_name',
                  'middle_name',
                  'last_name',
                  'department_id',
                  'role_id',
                  'profile_photo',
                ],
                include: [
                  {
                    model: Department,
                    attributes: [
                      'id',
                      'department_name'
                    ],
                  },
                  {
                    model: Role,
                    attributes: [
                      'id',
                      'role_name'
                    ]
                  }
                ],
              }
            ]
          },
        );

        if (!user_credentials) {
          return res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
        }

        const profile = user_credentials.UserProfile
        const formatted_user = {
          id: user_credentials.id,
          username: user_credentials.username,
          password: user_credentials.password,
          email: user_credentials.email,
          phone: user_credentials.phone,
          first_name: profile?.first_name,
          middle_name: profile?.middle_name,
          last_name: profile?.last_name,
          department_name: profile?.Department?.department_name,
          role_name: profile?.Role?.role_name,
          profile_photo: profile?.profile_photo,
        }

        return res.status(OK).json(formatted_user);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
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
          return res.status(NOT_FOUND).json({ message: 'User Credentials Not Found' });
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
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
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
          return res.status(NOT_FOUND).json({ message: 'User Credentials Not Found' })
        }

        await user_credentials.destroy({
          force: false
        })
        return res.status(OK).json({ message: 'User Credentials Destroyed' })
      } catch(error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message })
      }
    });
  }
};

module.exports.UserCredentialsController = UserCredentialsController;