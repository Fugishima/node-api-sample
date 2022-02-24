const { comparePassword } = require('../../helpers')

const UsersRepository = require('../../repositories/UsersRepository')

const ManagerController = require('./ManagerController')
const ClientController = require('./ClientController')

class UserController {
    static async authUser(email, password) {
        try {
            const result = await UsersRepository.findByEmail(email)

            if (result.length < 1) {
                return { code: 401 }
            } else {
                const hash = result[0].dataValues.password

                const isEqual = await comparePassword(password, hash)
                if (isEqual) {
                    return {
                          code: 200
                        , User: result[0].dataValues
                    }
                }

                return { code: 401 }
            }
        } catch {
            return { code: 500 }
        }
    }

    static async userRoles(userId) {
        try {
            const userRoleOne = await ManagerController.userIsManager(userId) // Role -> Manager
            const userRoleTwo = await ClientController.userIsClient(userId) // Role -> Client

            if (userRoleOne.code === 200 && userRoleTwo.code === 200) {
                return {
                      code: 200
                    , Manager: userRoleOne.Manager
                    , Client: userRoleTwo.Client
                }
            } else {
                throw 500
            }
        } catch {
            return { code: 500 }
        }
    }

    static async createClientUser(UserData, ClientData) {
        try {
            await UsersRepository.createClientUser(UserData, ClientData)
            return { code: 201 }
        } catch (error) {
            if (error.original.code === 'ER_DUP_ENTRY') {
                return { code: 409 }
            } else {
                return { code: 500 }
            }
        }
    }
}

module.exports = UserController