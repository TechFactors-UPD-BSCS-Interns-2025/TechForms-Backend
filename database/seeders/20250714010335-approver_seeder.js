'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('approvers', [
      {	
        approver_name: 'ARC',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        approver_name: 'JDLC',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        approver_name: 'ATP',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        approver_name: 'DFS',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('approvers', null, {});
  }
};
