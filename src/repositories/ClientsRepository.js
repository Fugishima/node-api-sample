const Client = require('../models/Client')

class ClientsRepository {
    static findByUserId (userId) {
        return Client.findAll({
            where: {
                users_id: userId
            }
        })
    }

    static createClient(ClientData) {
        return Client.create(ClientData, {
            fields: ['users_id', 'adress']
        })
    }
}

module.exports = ClientsRepository