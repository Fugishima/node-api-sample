express = require('express')
const router = express.Router()

const LoginController = require('../controllers/route-controllers/LoginController')

router.post('', LoginController.POST)

module.exports = router