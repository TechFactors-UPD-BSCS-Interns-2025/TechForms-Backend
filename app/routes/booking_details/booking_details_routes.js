const express = require('express')
const router = express.Router()

const { BookingDetailsController } = require('../../controllers/booking_details/booking_details_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/booking_details/all:
 *    get:
 *      tags: 
 *        - Booking Details
 *      description: GET All Booking Details API.
 *      summary: Get All Booking Details
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/AllBookingDetailsGetInformationResponse'
*/
router.get('/all', BookingDetailsController.all)
/**
 *  @openapi
 *  /api/v1/booking_details/{id}:
 *    get:
 *      tags: 
 *        - Booking Details
 *      description: GET Specific Booking Details by Id API.
 *      summary: Get Specific Booking Details
 *      security: 
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *           type: integer
 *          required: true
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/BookingDetailsGetInformationResponse'
 *      
*/
router.get('/:id', BookingDetailsController.get)

module.exports.BookingDetailsRoutes = router