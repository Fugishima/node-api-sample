express = require('express')
const router = express.Router()

const AddManagerController = require('../controllers/route-controllers/AddManagerController')

const middleware = require('../middleware/managerLogged')

router.post('', middleware, AddManagerController.POST)

module.exports = router