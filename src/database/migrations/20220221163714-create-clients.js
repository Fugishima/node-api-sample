'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Clients', {
            id: {
                  type: Sequelize.INTEGER
                , primaryKey: true
                , autoIncrement: true
                , allowNull: false
            },
            users_id: {
                  type: Sequelize.INTEGER
                , references: {
                    model: {
                        tableName: 'Users'
                    },
                    key: 'id'
                }
                , allowNull: false
                , onUpdate: 'CASCADE'
                , onDelete: 'CASCADE'
            },
            adress: {
                  type: Sequelize.STRING
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
        await queryInterface.dropTable('Clients')
    }
}
