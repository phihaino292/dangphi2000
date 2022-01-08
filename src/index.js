const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
var handlebars = require('express-handlebars');
var bodyParser = require("body-parser")
const app = express()
    // const port = process.env.PORT || 3000
const port = 3000


const route = require('./routes')
const db = require('./config/db')
app.use(methodOverride('_method'));
db.connect()

app.use(express.json());


app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'))


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))


app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
    }
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

route(app)

// app.get('/', (req, res) => {

//     res.render('home')
// })

// // app.get('/news', (req, res) => {

// //     res.render('news')
// // })

// app.get('/search', (req, res) => {

//     res.render('search')
// })






app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})