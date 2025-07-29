const express = require('express')
const router = express.Router()

const { PurposeJunctionController } = require('../../controllers/purpose_junction/purpose_junction_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/purpose_junction/create:
 *    post:
 *      tags: 
 *        - Purpose Junction
 *      description: Create Purpose Junction API.
 *      summary: Create Purpose Junction
 *      security: 
 *        - bearerAuth: []
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/PurposeJunctionGetInformation'
 *      responses:
 *        201:
 *          description: CREATED
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/PurposeJunctionsGetInformationResponse'
*/
router.post('/create', PurposeJunctionController.create)

/**
 * 
 *  @openapi
 *  /api/v1/purpose_junction/all:
 *    get:
 *      tags: 
 *        - Purpose Junction
 *      description: GET All Purpose Junction API.
 *      summary: Get All Purpose Junction
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/PurposeJunctionGetInformationResponse'
*/
router.get('/all', PurposeJunctionController.all)
/**
 *  @openapi
 *  /api/v1/purpose_junction/{id}:
 *    get:
 *      tags: 
 *        - Purpose Junction
 *      description: GET Specific Purpose Junction by Id API.
 *      summary: Get Specific Purpose Junction
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
 *                $ref: '#/components/schemas/PurposeJunctionGetInformationResponse'
 *      
*/
router.get('/:id', PurposeJunctionController.get)

/**
 *  @openapi
 *  /api/v1/purpose_junction/{id}:
 *    put:
 *      tags: 
 *        - Purpose Junction
 *      description: Update Specific Purpose Junction by Id API.
 *      summary: Update Specific Purpose Junction
 *      security: 
 *        - bearerAuth: []
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *           type: integer
 *          required: true
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/PurposeJunctionGetInformation'
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/PurposeJunctionGetInformationResponse'
 *      
*/
router.put('/:id', PurposeJunctionController.update)

/**
 *  @openapi
 *  /api/v1/purpose_junction/{id}:
 *    delete:
 *      tags: 
 *        - Purpose Junction
 *      description: Delete Specific Purpose Junction by Id API.
 *      summary: Delete Specific Purpose Junction
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
 *                $ref: '#/components/schemas/PurposeJunctionGetInformationResponse'
 *      
*/
router.delete('/:id', PurposeJunctionController.delete)

module.exports.PurposeJunctionRoutes = router