const Manager = require('../models/Manager')

class ManagersRepository {
    static findByUserId (userId) {
        return Manager.findAll({
            where: {
                users_id: userId
            }
        })
    }

    static createManager(ManagerData) {
        return Manager.create(ManagerData, {
            fields: ['users_id', 'salary']
        })
    }
}

module.exports = ManagersRepository