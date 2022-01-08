class NewsController {
    index(req, res) {
        res.render('news');
    }

    // search(req, res) {
    //     res.send('NEWS DETAILS')
    // }
}

module.exports = new NewsController;