'use strict';

const { FlierController } = require('../../app/controllers/flier/flier_controller');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fliers', [
      {	
        first_name: 'Elle',
        middle_name: 'E',
        last_name: 'Kabok',
        birthday: '1990-01-01',
        extensions: 'Jr.',
        title: 'Ms.',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        first_name: 'Junioe',
        middle_name: 'W',
        last_name: 'Kaasda',
        birthday: '1990-01-01',
        extensions: 'Jr.',
        title: 'Mr.',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        first_name: 'Elasdase',
        middle_name: 'Q',
        last_name: 'Asuyq',
        birthday: '1990-01-01',
        extensions: '',
        title: 'Mr.',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        first_name: 'Marcus',
        middle_name: 'S',
        last_name: 'Pogi',
        birthday: '1990-01-01',
        extensions: 'Sr.',
        title: 'Mr.',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
      {	
        first_name: 'Angle',
        middle_name: 'A',
        last_name: 'Right',
        birthday: '1990-01-01',
        extensions: 'III.',
        title: 'Ms.',
        created_at: new Date(),
        created_by: 2,
        updated_at: new Date(),
        updated_by: 2,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fliers', null, {
      truncate: true,
    });
  }
};