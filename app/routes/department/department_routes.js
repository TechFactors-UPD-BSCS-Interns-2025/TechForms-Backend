const express = require('express')
const router = express.Router()

const { DepartmentController } = require('../../controllers/department/department_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/department/all:
 *    get:
 *      tags: 
 *        - Department
 *      description: GET All Departments API.
 *      summary: Get All Departments
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DepartmentsGetInformationResponse'
*/
router.get('/all', DepartmentController.all)
/**
 *  @openapi
 *  /api/v1/department/{id}:
 *    get:
 *      tags: 
 *        - Department
 *      description: GET Specific Department by Id API.
 *      summary: Get Specific Department
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
 *                $ref: '#/components/schemas/DepartmentGetInformationResponse'
 *      
*/
router.get('/:id', DepartmentController.get)

module.exports.DepartmentRoutes = router