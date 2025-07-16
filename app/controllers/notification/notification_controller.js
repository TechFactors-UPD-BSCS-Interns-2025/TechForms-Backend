const { Op } = require("sequelize");

const { Notification, sequelize } = require("../../models/");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const NotificationController = {
  create: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try{
        const notification = await Notification.create({      
          'user_id': req.body.user_id,
          'message': req.body.message,
          'is_read': req.body.is_read,
          // 'created_by': req.user.id,
        }, {transaction: t});
        return res.status(OK).json({Notification: notification});
      } catch(error){
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message})
      }
    })
  },
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const notifications = await Notification.findAll({
          attributes: ['id', 'user_id', 'message', 'is_read', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        return res.json(notifications);
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const notification = await Notification.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'user_id', 'message', 'is_read', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
          
          },
        );

        if (!notification) {
          return res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });          
        }

        return res.status(OK).json(notification);        
      } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });        
      }
    });
  },
  update: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const notification = await Notification.findOne({
          where: {id: req.params.id}
        });

        if(!notification){
          return res.status(NOT_FOUND).json({message: "Notification Not Found"});          
        } 
        await notification.update({
          user_id: req.body.user_id,
          message: req.body.message,
          is_read: req.body.is_read,
          // updated_by: req.user.id
        }, {transaction: t});

        return res.status(OK).json({Notification: notification});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});
      }
    })
  },
  delete: async (req, res) => {
    await sequelize.transaction( async (t) => {
      try{
        const notification = await Notification.findOne({
          where: {id: req.params.id}
        });

        if(!notification){
          return res.status(NOT_FOUND).json({message: "Notification Not Found"});          
        }
        
        await notification.destroy({
          // deleted_by: req.user.id
          force: false,
        }, {transaction: t});

        return res.status(OK).json({message: 'Notification Destroyed'});
        
      }catch(e){
        return res.status(INTERNAL_SERVER_ERROR).json({message: e.message});        
      }
    })
  }
};

module.exports.NotificationController = NotificationController;