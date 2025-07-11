/**
 * @openapi
 * components:
 *   schemas:
 *     DepartmentGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         department_name:
 *           type: string
 *     DepartmentGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/DepartmentGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     DepartmentsGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/DepartmentGetInformationResponse'
 * 
 */
