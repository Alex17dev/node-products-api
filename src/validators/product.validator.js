import Joi from "joi";

export const productSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    price: Joi.number().positive().required(),
    description: Joi.string().min(5).max(500).required(),
    category: Joi.string().required(),
    image: Joi.string().uri().required()
});

