const bodyParser = require('body-parser')

const home = require('./home')
const login = require('./login')
const signin = require('./signin')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/', home)
    app.use('/login', login)
    app.use('/signin', signin)
}