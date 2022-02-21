'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Managers', {
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
            },
            salary: {
                  type: Sequelize.DECIMAL
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
        await queryInterface.dropTable('Managers')
    }
}
