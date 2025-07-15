const express = require('express')
const router = express.Router()

const { NotificationController } = require('../../controllers/notification/notification_controller')

// TODO: Update schema ref

/**
 *  @openapi
 *  /api/v1/notification/all:
 *    get:
 *      tags: 
 *        - Notification
 *      description: GET All Notifications API.
 *      summary: Get All Notifications
 *      security: 
 *        - bearerAuth: []
 *      responses:
 *        200:
 *          description: Ok
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/NotificationsGetInformationResponse'
*/
router.get('/all', NotificationController.all)
/**
 *  @openapi
 *  /api/v1/notification/{id}:
 *    get:
 *      tags: 
 *        - Notification
 *      description: GET Specific Notification by Id API.
 *      summary: Get Specific Notification
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
 *                $ref: '#/components/schemas/NotificationGetInformationResponse'
 *      
*/
router.get('/:id', NotificationController.get)

module.exports.NotificationRoutes = router