const express = require('express')
const router = express.Router()

const { FlightRequestController } = require('../../controllers/flight_request/flight_request_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/flight_request/all:
 *    get:
 *      tags: 
 *        - Flight Request
 *      description: GET All Flight Requests API.
 *      summary: Get All Flight Requests
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/FlightRequestsGetInformationResponse'
*/
router.get('/all', FlightRequestController.all)
/**
 *  @openapi
 *  /api/v1/flight_request/{id}:
 *    get:
 *      tags: 
 *        - Flight Request
 *      description: GET Specific Flight Request by Id API.
 *      summary: Get Specific Flight Request
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
 *                $ref: '#/components/schemas/FlightRequestGetInformationResponse'
 *      
*/
router.get('/:id', FlightRequestController.get)

module.exports.FlightRequestRoutes = router