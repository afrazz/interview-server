var jwt = require("jsonwebtoken");

require("dotenv").config();

const secret_key = process.env.JWT_SECRET;

const signToken = async (data) => {
  try {
    var token = await jwt.sign(data, secret_key);
    return token;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  signToken: signToken,
};
