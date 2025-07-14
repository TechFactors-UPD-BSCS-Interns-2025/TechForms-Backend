/**
 * @openapi
 * components:
 *   schemas:
 *     ApproverGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         approver_name:
 *           type: string
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
