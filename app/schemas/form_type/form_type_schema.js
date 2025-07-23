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
 *     FormTypeCreateInput:
 *       type: object
 *       required:
 *         - form_name
 *       properties:
 *         form_name:
 *           type: string
 *
 *     FormTypeUpdateInput:
 *       type: object
 *       required:
 *         - form_name
 *       properties:
 *         form_name:
 *           type: string
 */

