const Order = require('../models/CollageOrder')


exports.getOrder = async (req, res) => {

  res.status(200).send("order")
}

exports.createOrder = async function (req, res) {

  const newOrder = {
    title: req.body.title,
    selectedCollageID: req.body.selectedCollageID,
    selectedCollage: req.body.selectedCollage,
    Selectvalue: req.body.Selectvalue,
    frameprice: req.body.frameprice,
    price: req.body.price,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    transCo: req.body.transCo,
    parcelAddress: req.body.parcelAddress
  }

  const createdOrder = new Order(newOrder)
  const savedOrder = createdOrder.save()

  res.status(200).send(`Saved ${createdOrder}`)
};