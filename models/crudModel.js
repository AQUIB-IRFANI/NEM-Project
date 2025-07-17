const mongoose = require("mongoose");

const crudModel = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: Number
});

module.exports = mongoose.model('crudModel', crudModel);
