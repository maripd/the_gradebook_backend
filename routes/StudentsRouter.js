const router = require('express').Router()
const controller = require('../controllers/StudentsControllers')

router.get('/', controller.GetStudents)

module.exports = router
