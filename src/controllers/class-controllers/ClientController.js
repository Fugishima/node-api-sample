const ClientsRepository = require('../../repositories/ClientsRepository')

class ClientController {
    static async userIsClient(userId) {
        try {
            const result = await ClientsRepository.findByUserId(userId)
            if (result.length < 1) {
                return {
                      code: 200
                    , Client: false
                }
            } else {
                return {
                      code: 200
                    , Client: true
                }
            }
        } catch {
            return { code: 500 }
        }
    }

    static async getClientIdByUserId(users_id) {
        try {
            const result = await ClientsRepository.findByUserId(users_id)
            return {
                  code: 200
                , id: result[0].dataValues.id
            }
        } catch {
            return { code: 500 }
        }
    }
}

module.exports = ClientController