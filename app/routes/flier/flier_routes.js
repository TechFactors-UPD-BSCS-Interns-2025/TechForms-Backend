const express = require('express')
const router = express.Router()

const { FlierController } = require('../../controllers/flier/flier_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/flier/all:
 *    get:
 *      tags: 
 *        - Flier
 *      description: GET All Flier API.
 *      summary: Get All Flier
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/FlierGetInformationResponse'
*/
router.get('/all', FlierController.all)
/**
 *  @openapi
 *  /api/v1/flier/{id}:
 *    get:
 *      tags: 
 *        - Flier
 *      description: GET Specific Flier by Id API.
 *      summary: Get Specific Flier
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
 *                $ref: '#/components/schemas/FlierGetInformationResponse'
 *      
*/
router.get('/:id', FlierController.get)

module.exports.FlierRoutes = router