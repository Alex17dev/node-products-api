export const errorHandler = (err, req, res, next) => {
    console.error("🔴 Error:", err.message);

    // Si tiene status personalizado, usamos ese
    const status = err.status || 500;

    res.status(status).json({
        error: "Error interno del servidor",
        mensaje: err.message
    });
};
