/**
 * @openapi
 * components:
 *   schemas:
 *     FlierGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         first_name:
 *           type: string
 *         middle_name:
 *           type: string
 *         last_name:
 *           type: string
 *         birthday:
 *           type: string
 *           format: date
 *         extensions:
 *           type: string
 *         title:
 *           type: string
 *
 *     FlierGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/FlierGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     FlierGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/FlierGetInformationResponse'
 * 
 */
