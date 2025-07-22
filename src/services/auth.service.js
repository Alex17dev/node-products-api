import jwt from "jsonwebtoken";

const USER = {
  email: "admin@techlab.com",
  password: "123456",
};

export const login = async ({ email, password }) => {
  if (email !== USER.email || password !== USER.password) {
    throw { status: 401, message: "Credenciales inválidas" };
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};
