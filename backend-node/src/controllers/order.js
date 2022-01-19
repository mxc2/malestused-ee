const Order = require('../models/CollageOrder')

//Creating an order
exports.createOrder = async function (req, res) {

  const newOrder = {
    ID: req.body.ID,
    title: req.body.title,
    collageDescription: req.body.collageDescription,
    selectedCollageID: req.body.selectedCollageID,
    Selectvalue: req.body.Selectvalue,
    frame: req.body.frame,
    framePrice: req.body.framePrice,
    summary: req.body.summary,
    firstname: req.body.firstname,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
    transCo: req.body.transCo,
    parcelAddress: req.body.parcelAddress
  }

  const createdOrder = new Order(newOrder)
  const savedOrder = createdOrder.save()

  res.status(200).send(`Saved ${createdOrder}`)
};

exports.getOrder = (req,res)=>{ 

  Order.find() 
.then(result=>{ 
console.log('result: ',result) 
res.send(result.length>0?result:'No data'); 
}) 
.catch(err=>{ 
console.log(err); 
}) 
} 

exports.show = (req,res)=>{ 

  Order.find({'email':req.params.email})
.then(result=>{ 
console.log('result: ',result) 
res.send(result.length>0?result:'No data'); 
}) 
.catch(err=>{ 
console.log(err); 
}) 
} 
