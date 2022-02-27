const bodyParser = require('body-parser')

const home = require('./home')
const login = require('./login')
const signin = require('./signin')
const addManager = require('./addManager')
const addProducts = require('./addProducts')
const stock = require('./stock')
const orders = require('./orders')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/', home)
    app.use('/login', login)
    app.use('/signin', signin)
    app.use('/addManager', addManager)
    app.use('/addProducts', addProducts)
    app.use('/stock', stock)
    app.use('/orders', orders)
}