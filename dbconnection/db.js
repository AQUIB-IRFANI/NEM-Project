const { mongoose } = require("mongoose");

const conMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
    console.log('connected');
  } catch (error) {
    console.log(error);
  }

}
module.exports = conMongoDB;
