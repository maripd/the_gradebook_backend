const Router = require('express').Router()
const controller = require('../controllers/StudentCoursesControllers')

Router.get('/', controller.GetAllStudentCourses)

module.exports = Router