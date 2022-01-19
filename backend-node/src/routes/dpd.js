const express=require('express'); 
let router = express.Router();
const serviceController = require('../controllers/dpd')


module.exports=router.get('/dpd',serviceController.getProvivders); 
