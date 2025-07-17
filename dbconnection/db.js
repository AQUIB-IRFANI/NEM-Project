const { mongoose } = require("mongoose");

const conMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/nem");
    console.log('connected');
  } catch (error) {
    console.log(error);
  }

}
module.exports = conMongoDB;