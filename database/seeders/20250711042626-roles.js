'use strict';

const role = require('../../app/models/role');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {	
        role_name: 'HR',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        role_name: 'Employee',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {
      truncate: true,
    });
  }
};
