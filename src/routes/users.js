var express = require('express')

var router = express.Router()

const UserController = require('../app/controllers/UserController')

// router.get('/create', ProductController.create)
// router.post('/store', CourseController.store)
// router.get('/:id/edit', CourseController.edit)
// router.put('/:id', CourseController.update)
// router.delete('/:id', CourseController.destroy)

router.get('/', UserController.create)
router.post('/store', UserController.store)
router.get('/', UserController.show)

router.post('/', UserController.search)

module.exports = router