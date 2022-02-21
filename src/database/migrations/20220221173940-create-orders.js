'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                  type: Sequelize.INTEGER
                , primaryKey: true
                , autoIncrement: true
                , allowNull: false
            },
            clients_id: {
                  type: Sequelize.INTEGER
                , references: {
                    model: {
                        tableName: 'Clients'
                    },
                    key: 'id'
                }
                , allowNull: false
            },
            ordered_products: {
                  type: Sequelize.JSON
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
        await queryInterface.dropTable('Orders')
    }
}
