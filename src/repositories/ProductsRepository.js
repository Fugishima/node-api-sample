const Product = require('../models/Product')

class ProductsRepository {
    static createProducts(Products) {
        return Product.bulkCreate(Products, {
            fields: ['name', 'price']
        })
    }
}

module.exports = ProductsRepository