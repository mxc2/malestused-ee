const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
        ID: { type: String, required: true },
        title: { type: String, required: true },
        collageDescription: { type: String, required: true },
        selectedCollageID: { type: Number, required: true },
        Selectvalue: { type: String, required: true },
        frame: { type: String, required: true },
        framePrice: { type: Number, required: true },
        summary: { type: Number, required: true },
        firstname: { type: String, required: true },
        surname: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        transCo: { type:String, required: true },
        parcelAddress: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
});

const CollageOrder = model("CollageOrder", orderSchema);

module.exports = CollageOrder;