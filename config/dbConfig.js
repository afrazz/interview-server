const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("DB Connected");
  } catch (err) {
    console.log("err: ", err);
  }
};

module.exports = connectDB;
