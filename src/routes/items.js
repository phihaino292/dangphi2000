var express = require('express')

var router = express.Router()

const ItemsController = require('../app/controllers/ItemsController')

// router.get('/:slug', NewsController.search)
router.get('/items', ItemsController.index)

module.exports = router