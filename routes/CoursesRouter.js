const Router = require('express').Router()
const controller = require('../controllers/CoursesControllers')

Router.get('/', controller.GetAllCourses)

module.exports = Router