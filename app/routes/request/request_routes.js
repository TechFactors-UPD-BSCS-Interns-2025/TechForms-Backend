const express = require('express')
const router = express.Router()

const { RequestController } = require('../../controllers/request/request_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/request/all:
 *    get:
 *      tags: 
 *        - Request
 *      description: GET All Requests API.
 *      summary: Get All Requests
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/RequestsGetInformationResponse'
*/
router.get('/all', RequestController.all)
/**
 *  @openapi
 *  /api/v1/request/{id}:
 *    get:
 *      tags: 
 *        - Request
 *      description: GET Specific Request by Id API.
 *      summary: Get Specific Request
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
 *                $ref: '#/components/schemas/RequestGetInformationResponse'
 *      
*/
router.get('/:id', RequestController.get)

module.exports.RequestRoutes = router