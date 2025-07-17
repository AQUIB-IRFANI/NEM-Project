const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {

    type: String,
    required: true
  }
});

const registerModel = new mongoose.model('employee', registerSchema);
module.exports = registerModel;