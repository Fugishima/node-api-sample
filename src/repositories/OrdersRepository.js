const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Order = require('../models/Order')

const StockRepository = require('./StockRepository')

class OrdersRepository {
    static findAll() {
        return Order.findAll()
    }

    static findOrdersById(id) {
        return Order.findAll({
            where: {
                id: {
                    [Op.like]: `%${id}%`
                }
            }
        })
    }

    static createOrder(OrderData) {
        return Order.create(OrderData, {
            fields: ['clients_id', 'ordered_products']
        }).then(async (insertedOrder) => {
            for (const index in OrderData.ordered_products) {
                const products_id = OrderData.ordered_products[index].id
                const amount = (await StockRepository.findByProductsId(products_id))[0].dataValues.amount - OrderData.ordered_products[index].amount

                StockRepository.updateAmount(amount, products_id)
            }
        })
    }

    static findByClientsId(clients_id) {
        return Order.findAll({
            where: {
                clients_id: clients_id
            }
        })
    }

    static findClientOrdersById(clients_id, id) {
        return Order.findAll({
            where: {
                id: {
                    [Op.like]: `%${id}%`
                }
            }
        }).then((listedOrders) => {
            const clientOrders = []
            for (const index in listedOrders) {
                if (listedOrders[index].dataValues.clients_id === clients_id) {
                    clientOrders.push(listedOrders[index])
                }
            }

            return clientOrders
        })
    }
}

module.exports = OrdersRepository