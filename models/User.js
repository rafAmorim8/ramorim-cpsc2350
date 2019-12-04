const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, minlength: 1 },
  items: [{ type: mongoose.Types.ObjectId, ref: 'Item' }],
});

module.exports = mongoose.model('User', UserSchema);