//* validators/login.validator.js
const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(2).required(),
  password: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^(?:0|\+?44)(?:\d\s?){9,10}$/)
    .messages({ phone: "Phone is not valid" })
    .required(),
  postCode: Joi.string()
    // .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
});

module.exports = { registerSchema: registerSchema };
