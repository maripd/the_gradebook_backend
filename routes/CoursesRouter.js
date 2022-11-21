const Router = require('express').Router()
const controller = require('../controllers/CoursesControllers')

Router.get('/', controller.GetAllCourses)
Router.get('/:courseId', controller.GetCourseDetails)
Router.post('/create/:courseId', controller.CreateCourse)
Router.put('/:courseId', controller.UpdateCourse)
Router.delete('/:courseId', controller.DeleteCourse)
module.exports = Router