const { Schema, model } = require('mongoose')

const collageSchema = new Schema({
  imgage: { type: Array, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  a3price: { type: Number, required: true }
});

const CollageStyle = model("CollageStyle", collageSchema);

module.exports = CollageStyle;