const Client = require('../models/Client')

class ClientsRepository {
    static findByUserId (userId) {
        return Client.findAll({
            where: {
                users_id: userId
            }
        })
    }
}

module.exports = ClientsRepository