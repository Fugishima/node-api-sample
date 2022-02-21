'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Stock', {
            id: {
                  type: Sequelize.INTEGER
                , primaryKey: true
                , autoIncrement: true
                , allowNull: false
            },
            products_id: {
                  type: Sequelize.INTEGER
                , references: {
                    model: {
                        tableName: 'Products'
                    },
                    key: 'id'
                }
                , allowNull: false
            },
            amount: {
                  type: Sequelize.INTEGER
                , allowNull: false
            },
            created_at: {
                  type: Sequelize.DATE
                , allowNull: false
            },
            updated_at: {
                  type: Sequelize.DATE
                , allowNull: false
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Stock')
    }
}
