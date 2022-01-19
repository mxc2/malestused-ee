const express=require('express'); 
let router = express.Router();
const serviceController = require('../controllers/omniva')


module.exports=router.get('/omniva',serviceController.getProvivders); 
