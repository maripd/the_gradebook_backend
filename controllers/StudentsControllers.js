const { Student } = require('../models')

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll({})
    res.send(students)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudents
}
