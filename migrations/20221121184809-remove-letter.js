'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('grades', 'letter')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('grades', 'letter', {
      type: Sequelize.STRING
    })
  }
}
