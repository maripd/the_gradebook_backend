'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'grade')
    await queryInterface.addColumn('grades', 'courseId', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('courses', 'gradeId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'grades',
        key: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('courses', 'grade', {
      type: Sequelize.INTEGER
    })
    await queryInterface.removeColumn('grades', 'courseId')
    await queryInterface.removeColumn('courses', 'gradeId')
  }
}
