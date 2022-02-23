const User = require('../models/User')

class UsersRepository {
    static findByEmail (email){
        return User.findAll({
            where: {
                email: email
            }
        })
    }
}

module.exports = UsersRepository