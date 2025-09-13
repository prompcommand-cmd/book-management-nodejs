const Joi = require("joi");

const createSchema = Joi.object({
  title: Joi.string().min(1).required(),
  author: Joi.string().min(1).required(),
  year: Joi.number().integer().min(0).required(),
});

const updateSchema = Joi.object({
  title: Joi.string().min(1),
  author: Joi.string().min(1),
  year: Joi.number().integer().min(0).required(),
});

exports.validateCreate = async (payload) => {
  const { error, value } = createSchema.validate(payload);
  if (error) throw { status: 400, message: error.message };
  return value;
};

exports.validateUpdate = async (payload) => {
  const { error, value } = updateSchema.validate(payload);
  if (error) throw { status: 400, message: error.message };
  return value;
};
