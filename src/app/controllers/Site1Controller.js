const Product1 = require('../models/Product1')

const { mutipleMongooseToObject } = require('../../util/mongoose')

class Site1Controller {
    index(req, res, next) {
        // Product.find({}, function(err, products) {


        //         if (!err) res.json(products)
        //         res.status(400).json({ error: 'ERROR!!!' })
        //     })
        // { courses: mutipleMongooseToObject(courses) }

        Product1.find({})
            .then(product1s => {


                res.render('homes', { product1s: mutipleMongooseToObject(product1s) });
            })



        .catch(next);
        //     .catch(next);
        // }
        // index(req, res) {
        //     res.render('home')
        // }
    }


}

module.exports = new Site1Controller;