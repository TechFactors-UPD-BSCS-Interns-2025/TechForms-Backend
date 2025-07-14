const express = require('express')
const router = express.Router()

const { ApproverController } = require('../../controllers/approver/approver_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/approver/all:
 *    get:
 *      tags: 
 *        - Approver
 *      description: GET All Approver API.
 *      summary: Get All Approvers
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ApproversGetInformationResponse'
*/
router.get('/all', ApproverController.all)
/**
 *  @openapi
 *  /api/v1/approver/{id}:
 *    get:
 *      tags: 
 *        - Approver
 *      description: GET Specific Approver by Id API.
 *      summary: Get Specific Approver
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
 *                $ref: '#/components/schemas/ApproverGetInformationResponse'
 *      
*/
router.get('/:id', ApproverController.get)

module.exports.ApproverRoutes = router