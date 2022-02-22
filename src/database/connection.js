const Sequelize = require('sequelize')
const config = require('./config')

// Importing models.
const User = require('../models/User')
const Manager = require('../models/Manager')
const Client = require( '../models/Client')
const Order = require('../models/Order')
const Product = require('../models/Product')
const Stock = require('../models/Stock')

const connection = new Sequelize(config)

// Establishing communication between the database and model classes.
User.init(connection)
Manager.init(connection)
Client.init(connection)
Order.init(connection)
Product.init(connection)
Stock.init(connection)

// Creating the classes associations.
User.associate(connection.models)
Manager.associate(connection.models)
Client.associate(connection.models)
Order.associate(connection.models)
Product.associate(connection.models)
Stock.associate(connection.models)

module.exports = connection