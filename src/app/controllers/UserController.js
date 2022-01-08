const User = require('../models/User')

const { mongooseToObject } = require('../../util/mongoose')

class UserController {
    show(req, res, next) {
        User.findOne({ slug: req.params.slug })
            .then(user =>
                res.render('users/show', { user: mongooseToObject(user) })
            )
            .catch(next)
    }
    search(req, res) {
        res.render('search')
    }
    create(req, res, next) {
        res.render('users/create')
    }
    store(req, res, next) {
        const formData = req.body;
        formData.name = `${req.body.name}`
        const user = new User(formData)
        user.save();

        res.send('Product save')
    }

}

module.exports = new UserController();