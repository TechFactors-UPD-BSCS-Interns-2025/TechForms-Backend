'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('booking_details', [
      {	
        departure_ref_no: 'FRD2025001',
        departure_cost: 200.00,
        departure_ticket_path: '../files/fr-departure/0001.pdf',
        return_ref_no: 'FRR2025001',
        return_cost: 300.00,
        return_ticket_path: '../files/fr-return/0001.pdf',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        departure_ref_no: 'FRD2025002',
        departure_cost: 250.00,
        departure_ticket_path: '../files/fr-departure/0002.pdf',
        return_ref_no: 'FR2025002',
        return_cost: 360.00,
        return_ticket_path: '../files/fr-return/0002.pdf',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        departure_ref_no: 'FRD2025003',
        departure_cost: 539.00,
        departure_ticket_path: '../files/fr-departure/0003.pdf',
        return_ref_no: 'FRR2025003',
        return_cost: 964.00,
        return_ticket_path: '../files/fr-return/0003.pdf',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        departure_ref_no: 'FRD2025004',
        departure_cost: 932.00,
        departure_ticket_path: '../files/fr-departure/0004.pdf',
        return_ref_no: 'FRR2025004',
        return_cost: 971.00,
        return_ticket_path: '../files/fr-return/0004.pdf',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        departure_ref_no: 'FRD2025005',
        departure_cost: 138.00,
        departure_ticket_path: '../files/fr-departure/0005.pdf',
        return_ref_no: 'FRR2025005',
        return_cost: 531.00,
        return_ticket_path: '../files/fr-return/0005.pdf',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('booking_details', null, {
      truncate: true
    })
  }
};
