const express = require('express')
const router = express.Router()

const { UserProfileController } = require('../../controllers/user_profile/user_profile_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/user_profile/all:
 *    get:
 *      tags: 
 *        - User Profile
 *      description: GET All User Profiles API.
 *      summary: Get All User Profiles
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/UserProfilesGetInformationResponse'
*/
router.get('/all', UserProfileController.all)
/**
 *  @openapi
 *  /api/v1/user_profile/{id}:
 *    get:
 *      tags: 
 *        - User Profile
 *      description: GET Specific User Profile by Id API.
 *      summary: Get Specific User Profile
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
 *                $ref: '#/components/schemas/UserProfileGetInformationResponse'
 *      
*/
router.get('/:id', UserProfileController.get)

module.exports.UserProfileRoutes = router