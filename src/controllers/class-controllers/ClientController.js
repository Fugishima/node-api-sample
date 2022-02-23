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
}

module.exports = ClientController