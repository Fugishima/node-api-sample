express = require('express')
const router = express.Router()

const AddCProductController = require('../controllers/route-controllers/AddProductsController')

const middleware = require('../middleware/managerLogged')

router.post('', middleware, AddCProductController.POST)

module.exports = router