const express = require('express')
const router = express.Router()

const { PurposeOfTravelController } = require('../../controllers/purpose_of_travel/purpose_of_travel_controller');

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/purpose_of_travel/all:
 *    get:
 *      tags: 
 *        - PurposeOfTravel
 *      description: GET All Purpose API.
 *      summary: Get All Purposes
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/PurposeOfTravelGetInformationResponse'
*/
router.get('/all', PurposeOfTravelController.all)
/**
 *  @openapi
 *  /api/v1/purpose_of_travel/{id}:
 *    get:
 *      tags: 
 *        - PurposeOfTravel
 *      description: GET Specific Purpose by Id API.
 *      summary: Get Specific Purpose
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
 *                $ref: '#/components/schemas/PurposeOfTravelGetInformationResponse'
 *      
*/
router.get('/:id', PurposeOfTravelController.get)

module.exports.PurposeOfTravelRoutes = router