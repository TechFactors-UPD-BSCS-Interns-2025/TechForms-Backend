/**
 * @openapi
 * components:
 *   schemas:
 *     StatusTypeGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         status_name:
 *           type: string
 *     StatusTypeGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/StatusTypeGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     StatusTypesGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/StatusTypeGetInformationResponse'
 * 
 */
