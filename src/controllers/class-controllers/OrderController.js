const OrderRepository = require('../../repositories/OrdersRepository')

class OrderController {
    static async listOrders() {
        try {
            const results = await OrderRepository.findAll()
            return {
                  code: 200
                , Orders: results
            }
        } catch {
            return { code: 500 }
        }
    }

    static async searchOrder(orderId) {
        try {
            const results = await OrderRepository.findOrdersById(orderId)
            if (results.length < 1) {
                throw 404
            } else {
                return {
                      code: 200
                    , Orders: results
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

    static async createOrder(OrderData) {
        try {
            await OrderRepository.createOrder(OrderData)
            return { code: 201 }
        } catch {
            return  { code: 500 }
        }
    }

    static async listClientOrders(clients_id) {
        try {
            const results = await OrderRepository.findByClientsId(clients_id)
            return {
                  code: 200
                , Orders: results
            }
        } catch {
            return { code: 500 }
        }
    }

    static async searchClientOrder(clients_id, orderId) {
        try {
            const results = await OrderRepository.findClientOrdersById(clients_id, orderId)

            if (results.length < 1) {
                throw 404
            } else {
                return {
                      code: 200
                    , Orders: results
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

module.exports = OrderController