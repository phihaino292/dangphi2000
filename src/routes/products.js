var express = require('express')

var router = express.Router()

const ProductController = require('../app/controllers/ProductController')

// router.get('/create', ProductController.create)
// router.post('/store', CourseController.store)
// router.get('/:id/edit', CourseController.edit)
// router.put('/:id', CourseController.update)
// router.delete('/:id', CourseController.destroy)
router.get('/create', ProductController.create)
router.post('/store', ProductController.store)
router.get('/:id/edit', ProductController.edit)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.destroy)
router.get('/:slug', ProductController.show)


module.exports = router