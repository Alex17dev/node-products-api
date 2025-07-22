import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

dotenv.config();

const serviceAccount = require("../../firebase-key.json");

initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
