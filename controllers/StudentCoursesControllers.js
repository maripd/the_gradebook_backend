const { StudentCourse, Course, Student } = require('../models')

const GetAllStudentCourses = async (req, res) => {
  try {
    const studentCourses = await StudentCourse.findAll()
    res.send(studentCourses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStudentCourses
}