const Stock = require('../class-controllers/StockController')

class StockController {
    static async GETAll(req, res) {
        try {
            const listed = await Stock.showStock()
            if (listed.code === 200) {
                res.status(200).send({ Stock: listed.Stock })
            } else {
                throw listed
            }
        } catch {
            res.status(500).send({ error: 'Server internal error!' })
        }
    }

    static async GETSearch(req, res) {
        try {
            const { productName } =  req.query

            const listed = await Stock.search(productName)
            if (listed.code === 200) {
                res.status(200).send({ Products: listed.productsData })
            } else {
                throw listed
            }
        } catch (error) {
            if (error.code === 404) {
                res.status(404).send({ error: 'None product found!' })
            } else {
                res.status(500).send({ error: 'Server internal error' })
            }
        }
    }

    static async POST(req, res) {
        try {
            const { Batches } = req.body

            const stocked = await Stock.stockProducts(Batches)
            if (stocked.code === 200) {
                res.send({ message: 'Batches stocked!' })
            } else {
                throw stocked
            }
        } catch {
            res.status(500).send({ error: 'Server internal error!' })
        }
    }
}

module.exports = StockController