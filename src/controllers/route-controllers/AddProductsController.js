const ProductController = require('../class-controllers/ProductController')

class AddProductsController {
    static async POST (req, res) {
        try {
            const { Products } = req.body

            const created = await ProductController.createProducts(Products)
            if (created.code === 201) {
                res.status(201).send({ message: 'Products created!' })
            } else {
                throw created
            }
        } catch {
            res.status(500).send({ error: 'Server internal error!' })
        }
    }
}

module.exports = AddProductsController