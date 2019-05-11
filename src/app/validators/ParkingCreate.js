const Joi = require('joi')

module.exports = {
  body: {
    pos: Joi.string()
      .regex(/@\d+$/)
      .required(),
    disp: Joi.number()
      .min(1)
      .max(3)
      .required()
  }
}
