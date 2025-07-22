import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const usuarioValido = {
  email: "admin@admin.com",
  password: "123456"
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (email !== usuarioValido.email || password !== usuarioValido.password) {
    return res.status(401).json({ mensaje: "Credenciales inválidas" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.json({ token });
};
