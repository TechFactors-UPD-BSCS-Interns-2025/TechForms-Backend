/**
 * @openapi
 * components:
 *   schemas:
 *     RequestGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         form_id:
 *           type: integer
 *         status_id:
 *           type: integer
 *     ApproverGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApproverGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     ApproversGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/ApproverGetInformationResponse'
 * 
 */
