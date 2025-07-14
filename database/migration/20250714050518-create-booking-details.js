'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('booking_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departure_ref_no: {
        type: Sequelize.STRING
      },
      departure_cost: {
        type: Sequelize.DECIMAL
      },
      departure_ticket_path: {
        type: Sequelize.STRING
      },
      return_ref_no: {
        type: Sequelize.STRING
      },
      return_cost: {
        type: Sequelize.DECIMAL
      },
      return_ticket_path: {
        type: Sequelize.STRING
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
      deleted_at: {
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking_details');
  }
};