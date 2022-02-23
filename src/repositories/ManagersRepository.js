const Manager = require('../models/Manager')

class ManagersRepository {
    static findByUserId (userId) {
        return Manager.findAll({
            where: {
                users_id: userId
            }
        })
    }
}

module.exports = ManagersRepository