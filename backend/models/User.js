const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const UserSchema = new Schema({
  username: String,
  password: String,
});

module.exports = model('User', UserSchema);