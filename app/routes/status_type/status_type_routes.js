const express = require('express')
const router = express.Router()

const { StatusTypeController } = require('../../controllers/status_type/status_type_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/status_type/all:
 *    get:
 *      tags: 
 *        - StatusType
 *      description: GET All StatusTypes API.
 *      summary: Get All StatusTypes
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/StatusTypesGetInformationResponse'
*/
router.get('/all', StatusTypeController.all)
/**
 *  @openapi
 *  /api/v1/status_type/{id}:
 *    get:
 *      tags: 
 *        - StatusType
 *      description: GET Specific StatusType by Id API.
 *      summary: Get Specific StatusType
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
 *                $ref: '#/components/schemas/StatusTypeGetInformationResponse'
 *      
*/
router.get('/:id', StatusTypeController.get)

module.exports.StatusTypeRoutes = router