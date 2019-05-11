const Joi = require('joi')

module.exports = {
  body: {
    disp: Joi.number()
      .min(1)
      .max(3)
      .required()
  }
}
