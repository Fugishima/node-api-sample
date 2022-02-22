const { Model, DataTypes } = require('sequelize')

class Order extends Model {
    static init(sequelize) {
        super.init({
            ordered_products: DataTypes.JSON
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo( models.Client, { foreignKey: 'clients_id', as: 'order_client_association' } )
    }
}

module.exports = Order