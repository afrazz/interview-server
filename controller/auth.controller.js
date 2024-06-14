const User = require("../models/user.model");
const Joi = require("joi");
const { signToken } = require("../utils/jwtManagement");

const registerController = async (req, res) => {
  // Functionality
  const { firstName, lastName, password, email, phone, postCode } = req.body;

  const userEmailExists = await User.findOne({
    email: email,
  });

  if (userEmailExists) {
    return res.status(400).json({
      status: "Error",
      message: "User Email already exists",
    });
  }

  try {
    const userCreated = await new User({
      firstName,
      password,
      lastName,
      email,
      phone,
      postCode,
    });

    await userCreated.save();
    const userData = userCreated._doc;

    const signJWTToken = await signToken({ id: userData._id });

    console.log(signJWTToken);

    const resp = {
      sucess: true,
      message: "Register Success",
      data: { ...userData, token: signJWTToken },
    };
    res.json(resp);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

module.exports = registerController;
