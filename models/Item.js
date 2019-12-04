const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, maxlength: 30, required: true },
  category: { type: String, maxlength: 25, required: true },
  price: { type: Number, required: true },
  contact: { type: String, maxlength: 30 }
});

module.exports = mongoose.model('Item', ItemSchema);