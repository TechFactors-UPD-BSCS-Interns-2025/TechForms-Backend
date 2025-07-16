'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('status_types', [
        {
          status_name: '', // <-- your blank entry
          created_at: new Date(),
          created_by: 3,
          updated_at: new Date(),
          updated_by: 3,
        },
        {
          status_name: 'Pending',
          created_at: new Date(),
          created_by: 3,
          updated_at: new Date(),
          updated_by: 3,
        },
        {
          status_name: 'Approved',
          created_at: new Date(),
          created_by: 3,
          updated_at: new Date(),
          updated_by: 3,
        },
        {
          status_name: 'Rejected',
          created_at: new Date(),
          created_by: 3,
          updated_at: new Date(),
          updated_by: 3,
        },
        {
          status_name: 'Draft',
          created_at: new Date(),
          created_by: 3,
          updated_at: new Date(),
          updated_by: 3,
        },
      ]);
    } catch (error) {
      console.error('💥 Seeder Error:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('status_types', null, {});
  }
};
