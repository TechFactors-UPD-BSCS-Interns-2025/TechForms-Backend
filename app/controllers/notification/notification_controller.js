const { Op } = require("sequelize");

const { Notification, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const NotificationController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const notifications = await Notification.findAll({
          attributes: ['id', 'user_id', 'message', 'is_read', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(notifications);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const notification = await notification.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'user_id', 'message', 'is_read', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!notification) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(notification);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.NotificationController = NotificationController;