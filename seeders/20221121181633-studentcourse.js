'use strict'
const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const list = [...Array(6)].map((_) => {
      return {
        studentId: falso.randNumber({ min: 1, max: 3 }),
        courseId: falso.randNumber({ min: 1, max: 6 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('student_courses', list)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('student_courses')
  }
}
