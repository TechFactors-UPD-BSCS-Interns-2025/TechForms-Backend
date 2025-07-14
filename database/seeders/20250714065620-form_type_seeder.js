'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('form_types', [
      {	
        form_name: 'Flight Request',
        created_at: new Date(),
        created_by: 3,
        updated_at: new Date(),
        updated_by: 3,
      },
      {	
        form_name: 'Equipment Request',
        created_at: new Date(),
        created_by: 3,
        updated_at: new Date(),
        updated_by: 3,
      },
    ], {});
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('form_types', null, {});
  }
};
