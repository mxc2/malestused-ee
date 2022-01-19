const router = require("express").Router()
const orderController = require('../controllers/order')



module.exports = router.post('/create', orderController.createOrder)


module.exports=router.get('/orders',orderController.getOrder)

module.exports=router.get('/orders/:email', orderController.show);

