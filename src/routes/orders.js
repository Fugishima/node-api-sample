express = require('express')
const router = express.Router()

const OrderController = require('../controllers/route-controllers/OrderController')

const managerMiddleware = require('../middleware/managerLogged')
const clientMiddleware = require('../middleware/clientLogged')

router.get('/list', managerMiddleware, OrderController.GETAll)
router.get('/search', managerMiddleware, OrderController.GETSearch)
router.post('/make', clientMiddleware, OrderController.POST)
router.get('/client/list', clientMiddleware, OrderController.GETAllClientOrders)
router.get('/client/search', clientMiddleware, OrderController.GETSearchClientOrders)

module.exports = router