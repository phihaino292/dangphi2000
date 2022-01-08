const cartRouter = require('./carts')
const itemRouter = require('./items')
const newsRouter = require('./news')
const meRouter = require('./me')
const productsRouter = require('./products')
const usersRouter = require('./users')
const site1Router = require('./sites')
const siteRouter = require('./site')



function route(app) {

    app.use('/carts', cartRouter)
    app.use('/', itemRouter)
    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/products', productsRouter)
    app.use('/users', usersRouter)
    app.use('/sites', site1Router)
    app.use('/', siteRouter)


}


module.exports = route;