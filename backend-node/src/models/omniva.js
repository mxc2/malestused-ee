const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  address: { type: String, required: true },
});

module.exports = mongoose.model('omnivas', schema);