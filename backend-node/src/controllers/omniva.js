const providers=require('../models/omniva'); 

const getProvivders=(req,res)=>{ 

  providers.find() 
.then(result=>{ 
console.log('result: ',result) 
res.send(result.length>0?result:'No data'); 
}) 
.catch(err=>{ 
console.log(err); 
}) 
} 

module.exports={ 
  getProvivders 
} 