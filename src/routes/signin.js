express = require('express')
const router = express.Router()

const SigninController = require('../controllers/route-controllers/SigninController')

router.post('', SigninController.POST)

module.exports = router