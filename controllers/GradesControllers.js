const { Grade, Course, Student } = require('../models')

const GetGradesByStudentId = async (req, res) => {
  try {
    const grades = await Grade.findAll({
      include: [
        { model: Course, as: 'scores', attributes: ['name'] },
        { model: Student, as: 'pupil', attributes: ['name', 'email'] }
      ]
    })
    res.send(grades)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGradesByStudentId
}
