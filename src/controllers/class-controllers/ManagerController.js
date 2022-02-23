const ManagersRepository = require('../../repositories/ManagersRepository')

class ManagerController {
    static async userIsManager(userId) {
        try {
            const result = await ManagersRepository.findByUserId(userId)
            if (result.length < 1) {
                return {
                      code: 200
                    , Manager: false
                }
            } else {
                return {
                      code: 200
                    , Manager: true
                }
            }
        } catch {
            return { code: 500 }
        }
    }
}

module.exports = ManagerController