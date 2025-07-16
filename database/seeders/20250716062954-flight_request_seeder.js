'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flight_requests', [
      {
        profile_id: 1,
        flier_id: 1,
        purpose_id: 1,
        purpose_others: "others",
        start_business: "2025-07-16",
        end_business: "2025-07-16",
        departure_date: "2025-07-16",
        departure_time: "12:12:12",
        departure_city: "manila",
        return_date: "2025-07-16",
        return_time: "12:12:12",
        return_city: "cebu",
        approver_id: 1,
        remarks: "comments",
        booking_id: 2,
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        profile_id: 2,
        flier_id: 2,
        purpose_id: 2,
        purpose_others: "",
        start_business: "2025-07-16",
        end_business: "2025-07-16",
        departure_date: "2025-07-16",
        departure_time: "12:12:12",
        departure_city: "cebu",
        return_date: "2025-07-16",
        return_time: "12:12:12",
        return_city: "manila",
        approver_id: 1,
        remarks: "comments",
        booking_id: 2,
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flight_requests', null, {});
  }
};
