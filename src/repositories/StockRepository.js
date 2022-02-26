const Stock = require('../models/Stock')

class StockRepository {
    static findAll() {
        return Stock.findAll()
    }

    static findByProductsId(products_id) {
        return Stock.findAll({
            where: {
                products_id: products_id
            }
        })
    }

    static createStock(Batch) {
        return Stock.create(Batch, {
            fields: ['products_id', 'amount']
        })
    }

    static updateAmount(amount, products_id) {
        return Stock.update({
            amount: amount
        }, { where: { products_id: products_id }})
    }
}

module.exports = StockRepository