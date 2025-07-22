import {
  getProducts,
  getProduct,
  saveProduct,
  removeProduct
} from "../services/products.service.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await getProduct(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = await saveProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await removeProduct(req.params.id);
    res.status(204).end(); // Sin body, solo confirma que lo borró
  } catch (error) {
    next(error);
  }
};
