import Joi from "joi";
const email = Joi.string().email({ tlds: { allow: false } });
const password = Joi.string();
const newPassword = Joi.string().min(8);
const token = Joi.string();
const authSchema = Joi.object({
  email: email,
  password: password,
});
const recoverySchema = Joi.object({
  token: token.required(),
  newPassword: newPassword.required(),
});

export default { authSchema, recoverySchema };
