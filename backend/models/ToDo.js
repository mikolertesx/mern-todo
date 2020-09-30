const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const model = mongoose.model;

const ToDoSchema = new Schema({
  user: ObjectId,
  text: String, 
  checked: Boolean,
});

module.exports = model('ToDo', ToDoSchema);