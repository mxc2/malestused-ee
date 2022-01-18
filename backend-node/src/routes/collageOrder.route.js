const router = require("express").Router()
const orderController = require('../controllers/order')

router.post('/create', orderController.createOrder)

module.exports = router