const express = require('express')
const router = express.Router()

const { RoleController } = require('../../controllers/role/role_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/role/all:
 *    get:
 *      tags: 
 *        - Role
 *      description: GET All Roles API.
 *      summary: Get All Roles
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/RolesGetInformationResponse'
*/
router.get('/all', RoleController.all)
/**
 *  @openapi
 *  /api/v1/role/{id}:
 *    get:
 *      tags: 
 *        - Role
 *      description: GET Specific Role by Id API.
 *      summary: Get Specific Role
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
 *                $ref: '#/components/schemas/RoleGetInformationResponse'
 *      
*/
router.get('/:id', RoleController.get)

module.exports.RoleRoutes = router