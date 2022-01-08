const Product = require('../models/Product')

const { mongooseToObject } = require('../../util/mongoose')

class ProductController {
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product =>
                res.render('products/show', { product: mongooseToObject(product) })
            )
            .catch(next)
    }
    create(req, res, next) {
        res.render('products/create')
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `${req.body.image}`
        const product = new Product(formData)
        product.save();

        res.send('Product save')
    }
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(products => res.render('products/edit', {
                products: mongooseToObject(products)
            }))
            .catch(next)
    }

    update(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/products'))
            .catch(next)
    }

    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

}

module.exports = new ProductController();