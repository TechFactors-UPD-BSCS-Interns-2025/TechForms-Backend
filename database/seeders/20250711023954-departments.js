'use strict';

const department = require('../../app/models/department');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('departments', [
      {	
        department_name: '2Tech',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Accounting',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Customer Service',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'ETS',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Finance',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'HR/Admin',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Marketing',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Production, Logistics, Purchasing',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'R&D',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Sales',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'SHS',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'TFI Academy',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'Product Training & Support',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {	
        department_name: 'CoreDev',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('departments', null, {
      truncate: true,
    });
  }
};
