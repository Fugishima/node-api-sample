const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Product = require('../models/Product')

class ProductsRepository {
    static createProducts(Products) {
        return Product.bulkCreate(Products, {
            fields: ['name', 'price']
        })
    }

    static getIdsByName(productName) {
        return Product.findAll({
            where: {
                name: {
                    [Op.like]: `%${productName}%`
                }
            }
        })
    }
}

module.exports = ProductsRepository