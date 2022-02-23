const { Model, DataTypes } = require('sequelize')

class Product extends Model {
    static init(sequelize) {
        super.init({
              name: DataTypes.STRING
            , price: DataTypes.DECIMAL
        }, {
              sequelize
            , tableName: 'Products'
        })
    }

    static associate(models) {
        this.hasOne( models.Stock, { foreignKey: 'products_id', as: 'product_stock_association' } )
    }
}

module.exports = Product