const jwt = require('jsonwebtoken')

const UserController = require('../class-controllers/UserController')

class LoginController {
    static async POST (req, res){
        try {
            const { email, password } = req.body

            const isAuthenticated = await UserController.authUser(email, password)
            if (isAuthenticated.code === 200) {
                const userRoles = await UserController.userRoles(isAuthenticated.User.id)
                if (userRoles.code === 200) {
                    const token = jwt.sign({
                          id: isAuthenticated.User.id
                        , name: isAuthenticated.User.name
                        , email: isAuthenticated.User.email
                        , Manager: userRoles.Manager
                        , Client: userRoles.Client
                    }, process.env.JWT_KEY, { expiresIn: '3h' })

                    res.status(200).send({ token })
                } else {
                    throw userRoles
                }
            } else {
                throw isAuthenticated
            }
        } catch (error) {
            if (error.code === 401) {
                res.status(401).send({ error: 'Authentication failed!' })
            } else {
                res.status(500).send({ error: 'Internal server error!' })
            }
        }
    }
}

module.exports = LoginController