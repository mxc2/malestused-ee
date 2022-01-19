const express=require('express'); 
let router = express.Router();
const serviceController = require('../controllers/itella')


module.exports=router.get('/itella',serviceController.getProvivders); 
