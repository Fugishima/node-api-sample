const { Model, DataTypes } = require('sequelize')

class Stock extends Model {
    static init(sequelize) {
        super.init({
            amount: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo( models.Product, { foreignKey: 'products_id', as: 'stock_products_association' } )
    }
}

module.exports = Stock