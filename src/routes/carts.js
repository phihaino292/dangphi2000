var express = require('express')

var router = express.Router()

const CartsController = require('../app/controllers/CartsController')

// router.get('/:slug', NewsController.search)
router.get('/', CartsController.index)

module.exports = router