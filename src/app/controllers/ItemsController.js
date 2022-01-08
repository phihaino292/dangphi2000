class ItemsController {
    index(req, res) {
        res.render('item');
    }

    // search(req, res) {
    //     res.send('NEWS DETAILS')
    // }
}

module.exports = new ItemsController;