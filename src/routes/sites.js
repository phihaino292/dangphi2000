var express = require('express')

var router = express.Router()

const Site1Controller = require('../app/controllers/Site1Controller')



router.get('/', Site1Controller.index)

module.exports = router