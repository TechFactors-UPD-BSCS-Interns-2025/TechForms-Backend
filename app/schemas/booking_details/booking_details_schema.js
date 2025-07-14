/**
 * @openapi
 * components:
 *   schemas:
 *     BookingDetailsGetInformation:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         role_name:
 *           type: string
 *     BookingDetailsGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/BookingDetailsGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     AllBookingDetailsGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/BookingDetailsGetInformationResponse'
 * 
 */
