// Loading the environment variables.
require('dotenv').config()

// Loading the database connection.
require('./database/connection')

const express = require('express')
const routes = require('./routes')

const app = express()

routes(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server listening on port: ${port}`))