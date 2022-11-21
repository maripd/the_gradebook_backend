const router = require('express').Router()
const controller = require('../controllers/GradesControllers')

router.get('/', controller.GetGradesByStudentId)

module.exports = router
