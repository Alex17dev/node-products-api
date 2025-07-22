import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/products.routes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;



// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Registrar rutas
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use(errorHandler); // <- Manejo de errores global
// Manejar rutas no definidas
app.use((req, res, next) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        mensaje: `La ruta ${req.originalUrl} no existe en este servidor`
    });
});


// Ruta de prueba 
app.get('/', (req, res) => {
    res.send('Api de Productos funcionando 🚀');
});

// Iniciar servidor 
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
