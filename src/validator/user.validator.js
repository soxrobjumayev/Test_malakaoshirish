import Joi from 'joi'

  const bannerSchame = Joi.object({
    lastname: Joi.string().min(2).required(),
    surname: Joi.string().min(4).required(),
    gmail:Joi.string().email().min(4).required(),
    phone_nomer: Joi.string().pattern(/^\+?[0-9]{12,12}$/).required(),
    password: Joi.string().min(4).max(20).required(),

  })


 
const bannerSchema3 = Joi.object({
    gmail:Joi.string().email().min(4).required(),
    password: Joi.string().min(4).max(20).required(),
});

export {
  bannerSchame,bannerSchema3
}