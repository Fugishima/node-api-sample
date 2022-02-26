const StockRepository = require('../../repositories/StockRepository')

const ProductController = require('./ProductController')

class StockController {
    static async showStock() {
        try {
            const results = await StockRepository.findAll()
            return {
                  code: 200
                , Stock: results
            }
        } catch {
            return { code: 500 }
        }
    }

    static async search(productName) {
        try {
            const listed = await ProductController.getIdsByName(productName)
            if (listed.code === 200) {
                const productsData = []

                for (const index in listed.productsData) {
                    const result = await StockRepository.findByProductsId(listed.productsData[index].id)
                    if (result.length > 0) {
                        productsData.push({
                              name: listed.productsData[index].name
                            , price: listed.productsData[index].price
                            , amount: result[0].dataValues.amount
                        })
                    }
                }

                if (productsData.length < 1) throw { code: 404 }

                return {
                      code: 200
                    , productsData: productsData
                }
            } else {
                throw listed
            }
        } catch (error) {
            return error
        }
    }

    static async stockProducts(Batches) {
        try {
            for (const index in Batches) {
                const result = await StockRepository.findByProductsId(Batches[index].products_id)
                if (result.length < 1) {
                    await StockRepository.createStock(Batches[index])
                } else {
                    const amount = result[0].dataValues.amount + Batches[index].amount
                    await StockRepository.updateAmount(amount, Batches[index].products_id)
                }
            }
            return { code: 200 }
        } catch (error) {
            return { code: 500 }
        }
    }
}

module.exports = StockController