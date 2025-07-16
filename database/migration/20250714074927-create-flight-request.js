'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flight_requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile_id: {
        type: Sequelize.INTEGER
      },
      flier_id: {
        type: Sequelize.INTEGER
      },
      purpose_id: {
        type: Sequelize.INTEGER
      },
      purpose_others: {
        type: Sequelize.STRING
      },
      start_business: {
        type: Sequelize.DATE
      },
      end_business: {
        type: Sequelize.DATE
      },
      departure_date: {
        type: Sequelize.DATE
      },
      departure_time: {
        type: Sequelize.TIME
      },
      departure_city: {
        type: Sequelize.STRING
      },
      return_date: {
        type: Sequelize.DATE
      },
      return_time: {
        type: Sequelize.TIME
      },
      return_city: {
        type: Sequelize.STRING
      },
      approver_id: {
        type: Sequelize.INTEGER
      },
      remarks: {
        type: Sequelize.TEXT
      },
      booking_id: {
        type: Sequelize.INTEGER
      },
      created_by: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_by: {
        type: Sequelize.INTEGER
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.INTEGER
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flight_requests');
  }
};