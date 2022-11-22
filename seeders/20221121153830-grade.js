'use strict'

const falso = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const grades = [...Array(6)].map((_) => {
      return {
        score: falso.randNumber({ min: 0, max: 4 }),
        studentId: falso.randNumber({ min: 1, max: 3 }),
        createdAt: new Date(),
        updatedAt: new Date(),
        courseId: falso.randNumber({ min: 1, max: 6 })
      }
    })
    await queryInterface.bulkInsert('grades', grades)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades')
  }
}
