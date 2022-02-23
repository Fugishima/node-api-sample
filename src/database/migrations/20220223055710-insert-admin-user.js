'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
              name: 'admin'
            , email: 'admin@email.com'
            , password: '$2b$10$KtYlVl0esKb7L0Bz9G.M6ep.P6KEVKiceWK/61yoquegbRFNt6K4u'
            , created_at: new Date()
            , updated_at: new Date()
        }])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {})
    }
}
