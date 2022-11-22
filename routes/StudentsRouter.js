const router = require('express').Router()
const controller = require('../controllers/StudentsControllers')

router.get('/', controller.GetStudents)
router.get('/:id', controller.GetOneStudent)
router.post('/', controller.createStudent)
router.put('/', controller.updateStudent)

module.exports = router
