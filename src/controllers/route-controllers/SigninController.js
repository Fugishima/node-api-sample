const { hashPassword } = require('../../helpers')

const UserController = require('../class-controllers/UserController')

class SigninController {
    static async POST (req, res) {
        try {
            const { name, email, password, adress } = req.body

            const UserData = {
                  name: name
                , email: email
                , password: await hashPassword(password)
            }
            const ClientData = {
                adress: adress
            }

            const created = await UserController.createClientUser(UserData, ClientData)
            if (created.code === 201) {
                res.status(201).send({ message: 'User created!' })
            } else {
                throw created
            }
        } catch(error) {
            if (error.code === 409) {
                res.status(409).send({ error: 'User already exists!' })
            } else {
                res.status(500).send({ error: 'Internal server error!' })
            }
        }
    }
}

module.exports = SigninController