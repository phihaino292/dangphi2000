const Product = require('../models/Product')

const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    index(req, res, next) {
        // Product.find({}, function(err, products) {


        //         if (!err) res.json(products)
        //         res.status(400).json({ error: 'ERROR!!!' })
        //     })
        // { courses: mutipleMongooseToObject(courses) }

        Product.find({})
            .then(products => {


                res.render('home', { products: mutipleMongooseToObject(products) });
            })



        .catch(next);
        //     .catch(next);
        // }
        // index(req, res) {
        //     res.render('home')
        // }
    }


}

module.exports = new SiteController;