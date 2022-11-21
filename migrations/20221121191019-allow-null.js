'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'gradeId')
    await queryInterface.addColumn('courses', 'gradeId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'grades',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('courses', 'gradeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'grades',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('courses', 'gradeId')
  }
}
