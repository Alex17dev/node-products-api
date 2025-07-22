import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from "../controllers/products.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validateBody.js";
import { productSchema } from "../validators/product.validator.js";


const router = express.Router();

// PROTEGER las rutas
router.get("/", authMiddleware, getAllProducts);
router.get("/:id", authMiddleware, getProductById);
router.post("/create", authMiddleware, createProduct);
router.delete("/:id", authMiddleware, deleteProduct);
router.post("/create", authMiddleware, validateBody(productSchema), createProduct);


export default router;
