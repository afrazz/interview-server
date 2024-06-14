const { hash } = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    min: [3, "at least 3 character Required!"],
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    min: [2, "at least 2 character Required!"],
    required: [true, "First name is required"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
  password: { type: String, required: true },
  phone: { type: Number, required: true, min: 10 },
  postCode: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const hashedPassword = await hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

const User = new mongoose.model("user", userSchema);

module.exports = User;
