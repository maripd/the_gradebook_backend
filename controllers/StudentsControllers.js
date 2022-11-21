const { Student, Grade } = require('../models')

const GetStudents = async (req, res) => {
  try {
    const students = await Student.findAll()
    res.send(students)
  } catch (error) {
    throw error
  }
}

const GetOneStudent = async (req, res) => {
  try {
    let studentId = parseInt(req.params.id)
    const grade = await Student.findOne({ where: { id: studentId } })
    res.send(grade)
  } catch (error) {
    throw error
  }
}

const createStudent = async (req, res) => {
  try {
    const newStudents = await Student.create(req.body)
    res.send(newStudents)
  } catch (error) {
    throw error
  }
}

const updateStudent = async (req, res) => {
  try {
    const { id } = req.body
    const student = await Student.update(req.body, {
      where: { id: id },
      returning: true
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetStudents,
  GetOneStudent,
  createStudent,
  updateStudent
}
