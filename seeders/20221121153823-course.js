'use strict'
const falso = require(`@ngneat/falso`)

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const courses = [...Array(6)].map((_) => {
      return {
        name: falso.randJobType(),
        studentId: falso.randNumber({ min: 1, max: 3 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('courses', courses)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses')
  }
}
