const { Model, DataTypes } = require('sequelize')

class Client extends Model {
    static init(sequelize) {
        super.init({
            adress: DataTypes.STRING
        }, {
              sequelize
            , tableName: 'Clients'
        })
    }

    static associate(models) {
        this.belongsTo( models.User, { foreignKey: 'users_id', as: 'client_user_association' } )
        this.hasMany( models.Order, { foreignKey: 'clients_id', as: 'client_order_association' } )
    }
}

module.exports = Client