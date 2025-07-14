const joi = require ('joi')

const contactValidator = joi.object({
    name: joi.string().min(3).max(100).required(),
    email:joi.string().email().required(),
    phoneNumber: joi.string().optional().min(10).max(15)
});

module.exports= contactValidator;