const { Op } = require("sequelize");

const { BookingDetails, sequelize } = require("../../models");

const { CREATED, INTERNAL_SERVER_ERROR, NOT_FOUND, OK, PRECONDITION_FAILED } = require('../../constants/http/status_codes');


const BookingDetailsController = {
  all: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const booking_details = await BookingDetails.findAll({
          attributes: ['id', 'departure_ref_no', 'departure_cost', 'departure_ticket_path', 'return_ref_no', 'return_cost', 'return_ticket_path', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']
        });
        res.json(booking_details);
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({message: error.message});
      }
    });
  },
  get: async (req, res) => {
    await sequelize.transaction(async (t) => {
      try {
        const booking_details = await BookingDetails.findOne(
          {
            where: {
              id: req.params.id,
            },
            attributes: ['id', 'departure_ref_no', 'departure_cost', 'departure_ticket_path', 'return_ref_no', 'return_cost', 'return_ticket_path', 'created_by', 'created_at', 'updated_by', 'updated_at', 'deleted_by', 'deleted_at']  
          },
        );

        if (!booking_details) {
          res.status(NOT_FOUND).json({
            message: `No matching record with ${req.params.id}`,
          });
          return;
        }

        res.status(OK).json(booking_details);
        return;
      } catch (error) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
        return;
      }
    });
  },
};

module.exports.BookingDetailsController = BookingDetailsController;