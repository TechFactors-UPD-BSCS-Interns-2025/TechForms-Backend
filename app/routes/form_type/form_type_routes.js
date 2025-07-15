const express = require('express')
const router = express.Router()

const { FormTypeController } = require('../../controllers/form_type/form_type_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/form_type/all:
 *    get:
 *      tags: 
 *        - FormType
 *      description: GET All FormTypes API.
 *      summary: Get All FormTypes
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/FormTypesGetInformationResponse'
*/
router.get('/all', FormTypeController.all)
/**
 *  @openapi
 *  /api/v1/form_type/{id}:
 *    get:
 *      tags: 
 *        - FormType
 *      description: GET Specific FormType by Id API.
 *      summary: Get Specific FormType
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
 *                $ref: '#/components/schemas/FormTypeGetInformationResponse'
 *      
*/
router.get('/:id', FormTypeController.get)

module.exports.FormTypeRoutes = router