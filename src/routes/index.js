const bodyParser = require('body-parser')

const home = require('./home')

module.exports = (app) => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use('/', home)
}