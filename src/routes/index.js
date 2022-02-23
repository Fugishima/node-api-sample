const bodyParser = require('body-parser')

const home = require('./home')
const login = require('./login')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/', home)
    app.use('/login', login)
}