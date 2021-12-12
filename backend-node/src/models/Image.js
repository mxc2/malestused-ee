const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  imgCollection: { 
    type: Array
  },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'images'
})

module.exports = mongoose.model('Image', imageSchema)