'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('purpose_of_travels', [
      {
      purpose_name: 'Business Review Meeting',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'CEAP',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Client Call',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Courtesy Visit',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'EduTek',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'ManCom',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'NatCom',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Sales Presentation',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Sales Training',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Training Request',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'To Attend Convention',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
      {
      purpose_name: 'Year End Party',
      created_at: new Date(),
      created_by: 2,
      updated_at: new Date(),
      updated_by: 2,
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('purpose_of_travels', null, {
      truncate: true,
    });
  }
};
