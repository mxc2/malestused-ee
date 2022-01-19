const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Address: { type: String, required: true }
});

module.exports = mongoose.model('dpds', schema);