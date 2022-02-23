const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, process.env.JWT_KEY)
        if (decode.Client) {
            req.User = decode
            next()
        } else {
            throw 401
        }
    } catch {
        res.status(401).send({ error: 'User unauthorized!' })
    }
}