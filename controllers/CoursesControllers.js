const { Course } = require('../models');

const GetAllCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const GetCourseDetails = async (req, res) => {
  try{
    const courses = await Course.findByPk(req.params.courseId)
    res.send(courses)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(courseBody)
    res.send(newCourse)
  } catch (error) {
    throw error
  }
}

const UpdateCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.courseId)
    let updatedCourse = await Course.update(req.body, {
      where: {id: courseId},
      returning: true
    })
  } catch (error) {
    throw error 
  }
}

const DeleteCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.courseId)
    await Course.destroy({
      where: {id:courseId}
    })
    res.send({message: `Delete Course with id of ${courseId}`})
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllCourses,
  GetCourseDetails,
  UpdateCourse,
  DeleteCourse
}