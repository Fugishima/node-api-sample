const Order = require('../class-controllers/OrderController')
const ClientController = require('../class-controllers/ClientController')

class OrderController {
    static async GETAll(req, res) {
        try {
            const listed = await Order.listOrders()
            if (listed.code === 200) {
                res.status(200).send(listed.Orders)
            } else {
                throw listed
            }
        } catch {
            res.status(500).send({ error: 'Server internal error!' })
        }
    }

    static async GETSearch(req, res) {
        try {
            const { orderId } = req.body

            const listed = await Order.searchOrder(orderId)
            if (listed.code === 200) {
                res.status(200).send(listed.Orders)
            } else {
                throw listed
            }
        } catch (error) {
            if (error.code === 404) {
                res.status(404).send({ error: 'None order found!' })
            } else {
                res.status(500).send({ error: 'Server internal error!' })
            }
        }
    }

    static async POST(req, res) {
        try {
            const { id } = req.User
            const { ordered_products } = req.body

            const result = await ClientController.getClientIdByUserId(id)
            if (result.code === 200) {
                const clients_id = result.id

                const OrderData = {
                      clients_id: clients_id
                    , ordered_products: ordered_products
                }

                const created = await Order.createOrder(OrderData)
                if (created.code === 201) {
                    res.status(201).send({ message: 'Purchase order created!' })
                } else {
                    throw created
                }
            } else {
                throw result
            }
        } catch {
            res.status(500).send({ error: 'Internal server error!' })
        }
    }

    static async GETAllClientOrders(req, res) {
        try {
            const { id } = req.User

            const result = await ClientController.getClientIdByUserId(id)
            if (result.code === 200) {
                const clients_id = result.id

                const listed = await Order.listClientOrders(clients_id)
                if (listed.code === 200) {
                    res.status(200).send( listed.Orders )
                } else {
                    throw listed
                }
            } else {
                throw result
            }
        } catch {
            res.status(500).send({ error: 'Server internal error!' })
        }
    }

    static async GETSearchClientOrders(req, res) {
        try {
            const { id } = req.User
            const { orderId } = req.body

            const result = await ClientController.getClientIdByUserId(id)
            if (result.code === 200) {
                const clients_id = result.id

                const listed = await Order.searchClientOrder(clients_id, orderId)
                if (listed.code === 200) {
                    res.status(200).send(listed.Orders)
                } else {
                    throw listed
                }
            } else {
                throw result
            }
        } catch (error) {
            if (error.code === 404) {
                res.status(404).send({ error: 'None order found!' })
            } else {
                res.status(500).send({ error: 'Server internal error!' })
            }
        }
    }
}

module.exports = OrderController