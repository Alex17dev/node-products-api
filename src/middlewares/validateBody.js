export const validateBody = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errores = error.details.map((e) => e.message);
            return res.status(400).json({ error: "Datos inválidos", detalles: errores });
        }

        next();
    };
};
