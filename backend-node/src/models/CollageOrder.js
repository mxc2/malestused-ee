const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
        title: { type: String, required: true },
        selectedCollageID: { type: String, required: true },
        selectedCollage: { type: String, required: true },
        Selectvalue: { type: String, required: true },
        frameprice: { type: Number, required: true },
        price: { type: Number, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        transCo: { type:String, required: true },
        parcelAddress: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
});

const CollageOrder = model("CollageOrder", orderSchema);

module.exports = CollageOrder;