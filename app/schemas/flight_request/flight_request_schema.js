/**
 * @openapi
 * components:
 *   schemas:
 *     FlightRequestGetInformation:
 *       type: object
 *       properties:
 *         profile_id:
 *           type: integer
 *         flier_id:
 *           type: integer
 *         purpose_id:
 *           type: integer
 *         purpose_others:
 *           type: string
 *         start_business:
 *           type: string
 *           format: date
 *         end_business:
 *           type: string
 *           format: date
 *         departure_date:
 *           type: string
 *           format: date
 *         departure_time:
 *           type: string
 *           format: time
 *         departure_city:
 *           type: string
 *         return_date:
 *           type: string
 *           format: date
 *         return_time:
 *           type: string
 *           format: time
 *         return_city:
 *           type: string
 *         approver_id:
 *           type: integer
 *         remarks:
 *           type: string
 *         booking_id:
 *           type: string
 * 
 *     FlightRequestGetInformationResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/FlightRequestGetInformation'
 *         - $ref: '#/components/schemas/TimeStamps'
 *     FlightRequestsGetInformationResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/FlightRequestGetInformationResponse'
 * 
 */
