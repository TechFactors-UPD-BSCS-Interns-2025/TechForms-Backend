const express = require('express')
const router = express.Router()

const { UserCredentialsController } = require('../../controllers/user_credentials/user_credentials_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/user_credentials/all:
 *    get:
 *      tags: 
 *        - User Credentials
 *      description: GET All UserCredentials API.
 *      summary: Get All UserCredentials
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/AllUserCredentialsGetInformationResponse'
*/
router.get('/all', UserCredentialsController.all)
/**
 *  @openapi
 *  /api/v1/user_credentials/{id}:
 *    get:
 *      tags: 
 *        - User Credentials
 *      description: GET Specific User Credentials by Id API.
 *      summary: Get Specific User Credentials
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
 *                $ref: '#/components/schemas/UserCredentialsGetInformationResponse'
 *      
*/
router.get('/:id', UserCredentialsController.get)

module.exports.UserCredentialsRoutes = router