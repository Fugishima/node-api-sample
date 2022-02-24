const User = require('../models/User')

const ClientsRepository = require('./ClientsRepository')
const ManagersRepository = require('./ManagersRepository')

class UsersRepository {
    static findByEmail (email){
        return User.findAll({
            where: {
                email: email
            }
        })
    }

    static createClientUser(UserData, ClientData) {
        return User.create(UserData, {
            fields: ['name', 'email', 'password']
        }).then((insertedUser) => {
            ClientData.users_id = insertedUser.dataValues.id
            ClientsRepository.createClient(ClientData)
        })
    }

    static createManagerUser(UserData, ManagerData) {
        return User.create(UserData, {
            fields: ['name', 'email', 'password']
        }).then((insertedUser) => {
            ManagerData.users_id = insertedUser.dataValues.id
            ManagersRepository.createManager(ManagerData)
        })
    }
}

module.exports = UsersRepository