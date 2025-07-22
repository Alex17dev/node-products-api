import { db } from "../config/firebase.js";

const collection = db.collection("products");

export const getProducts = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getProduct = async (id) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) throw { status: 404, message: "Producto no encontrado" };
  return { id: doc.id, ...doc.data() };
};

export const saveProduct = async (data) => {
  const doc = await collection.add(data);
  return { id: doc.id, ...data };
};

export const removeProduct = async (id) => {
  await collection.doc(id).delete();
};
