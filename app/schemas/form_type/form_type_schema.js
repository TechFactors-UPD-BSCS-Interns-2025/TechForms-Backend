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
 *         - status_name
 *         - created_by
 *       properties:
 *         status_name:
 *           type: string
 *         created_by:
 *           type: integer
 *
 *     FormTypeUpdateInput:
 *       type: object
 *       required:
 *         - status_name
 *         - updated_by
 *       properties:
 *         status_name:
 *           type: string
 *         updated_by:
 *           type: integer
 */

