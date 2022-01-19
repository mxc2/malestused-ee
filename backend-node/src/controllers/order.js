const Order = require('../models/CollageOrder')


exports.getOrder = async (req, res) => {

  res.status(200).send("order")
}

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