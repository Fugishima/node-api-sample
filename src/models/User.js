const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
              name: DataTypes.STRING
            , email: DataTypes.STRING
            , password: DataTypes.STRING
        }, {
              sequelize
            , tableName: 'Users'
        })
    }

    static associate(models) {
        this.hasOne( models.Manager, { foreignKey: 'users_id', as: 'user_manager_association' } )
        this.hasOne( models.Client, { foreignKey: 'users_id', as: 'user_client_association' } )
    }
}

module.exports = User