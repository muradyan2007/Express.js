import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateLink = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        shortLink: Joi.string().uri().required(),
        longLink: Joi.string().uri().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.message });
    }

    next();
};
