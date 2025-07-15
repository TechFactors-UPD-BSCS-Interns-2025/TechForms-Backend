'use strict';

const user_credentials = require('../../app/models/user_credentials');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_credentials', [
      {	
        profile_id: 1,
        username: 'fsalazar',
        password: 'tfi-felicia',
        email: 'fsalazar@tfi.com',
        phone: '0911111111',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        profile_id: 2,
        username: 'ntorres',
        password: 'tfi-nathan',
        email: 'ntorres@tfi.com',
        phone: '09222222222',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        profile_id: 3,
        username: 'eellis',
        password: 'tfi-elizabeth',
        email: 'eellis@tfi.com',
        phone: '09333333333',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        profile_id: 4,
        username: 'ielliot',
        password: 'tfi-isaac',
        email: 'ielliot@tfi.com',
        phone: '09444444444',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
      {
        profile_id: 5,
        username: 'wmiller',
        password: 'tfi-william',
        email: 'wmiller@tfi.com',
        phone: '09555555555',
        created_at: new Date(),
        created_by: 1,
        updated_at: new Date(),
        updated_by: 1,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_credentials', null, {});
  }
};
