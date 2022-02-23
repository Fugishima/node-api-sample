const { Model, DataTypes } = require('sequelize')

class Manager extends Model {
    static init(sequelize) {
        super.init({
            salary: DataTypes.DECIMAL
        }, {
              sequelize
            , tableName: 'Managers'
        })
    }

    static associate(models) {
        this.belongsTo( models.User, { foreignKey: 'users_id', as: 'manager_user_association' } )
    }
}

module.exports = Manager