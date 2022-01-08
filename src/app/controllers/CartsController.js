class CartsController {
    index(req, res) {
        res.render('cart');
    }

    // search(req, res) {
    //     res.send('NEWS DETAILS')
    // }
}

module.exports = new CartsController;