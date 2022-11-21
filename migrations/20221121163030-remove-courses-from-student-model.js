'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('students', 'courses')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('students', 'courses',{
      type: Sequelize.STRING
    })
  }
};
