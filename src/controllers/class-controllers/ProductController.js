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

    static async getIdsByName(productName) {
        try {
            const results = (await ProductsRepository.getIdsByName(productName))
            if (results.length < 1) {
                throw 404
            } else {
                const productsData = []
                for (const index in results) {
                    productsData.push({
                          id: results[index].dataValues.id
                        , name: results[index].dataValues.name
                        , price: results[index].dataValues.price
                    })
                }

                return {
                      code: 200
                    , productsData: productsData
                }
            }
        } catch (error) {
            if (error === 404) {
                return { code: 404 }
            } else {
                return { code: 500 }
            }
        }
    }
}

module.exports = ProductController