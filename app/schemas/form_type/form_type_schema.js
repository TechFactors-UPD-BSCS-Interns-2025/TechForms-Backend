/**
 * @openapi
 * components:
 *   schemas:
 *     FormTypeGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         form_name:
 *           type: string
 *     FormTypeGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/FormTypeGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     FormTypesGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/FormTypeGetInformationResponse'
 * 
 */
