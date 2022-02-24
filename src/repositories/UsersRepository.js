const User = require('../models/User')

const ClientsRepository = require('./ClientsRepository')

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
            console.log(ClientData)
            ClientsRepository.createClient(ClientData)
        })
    }
}

module.exports = UsersRepository