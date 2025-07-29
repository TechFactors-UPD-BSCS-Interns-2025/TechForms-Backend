/**
 * @openapi
 * components:
 *   schemas:
 *     PurposeJunctionGetInformation:
 *       type: object
 *       properties:
 *         flight_request_id:
 *           type: integer
 *         purpose_id:
 *           type: integer
 *     PurposeJunctionGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/PurposeJunctionGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     PurposeJunctionsGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/PurposeJunctionGetInformationResponse'
 * 
 */
