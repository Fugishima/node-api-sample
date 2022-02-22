express = require('express')
const router = express.Router()

const HomeController = require('../controllers/route-controllers/HomeController')

router.get('', HomeController.GET)

module.exports = router