const ProductsRepository = require('../../repositories/ProductsRepository')

class ProductController {
    static async createProducts(Products) {
        try {
            await ProductsRepository.createProducts(Products)
            return { code: 201 }
        } catch {
            return { code: 500 }
        }
    }
}

module.exports = ProductController