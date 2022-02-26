express = require('express')
const router = express.Router()

const StockController = require('../controllers/route-controllers/StockController')

const middleware = require('../middleware/managerLogged')

router.get('/list', StockController.GETAll)
router.get('/search', StockController.GETSearch)
router.post('/stockProducts', middleware, StockController.POST)

module.exports = router