# 🛒 API REST de Productos – Node.js + Firebase

Este proyecto es una API RESTful construida con **Node.js**, **Express.js** y **Firebase Firestore** como base de datos. Permite realizar operaciones CRUD sobre productos y cuenta con autenticación JWT para proteger rutas sensibles.

---

## 🚀 ¿Cómo iniciar el proyecto localmente?

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/api-productos-nodejs.git
   cd api-productos-nodejs
   ```

2. Instalá las dependencias:
   ```bash
   npm install
   ```

3. Creá un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```env
   PORT=3000
   JWT_SECRET=miclaveultrasecreta
   ```

4. Agregá tu archivo de clave de servicio de Firebase:
   - Nombre del archivo: `firebase-key.json`
   - Ubicación: raíz del proyecto (agregalo al `.gitignore`)

5. Iniciá el servidor:
   ```bash
   npm start
   ```

La API estará disponible en:
👉 `http://localhost:3000`

---

## 🔐 Autenticación

Para acceder a rutas protegidas, primero obtené un token JWT mediante:

### `POST /auth/login`

🔸 Body:
```json
{
  "email": "admin@admin.com",
  "password": "123456"
}
```

🔸 Respuesta:
```json
{
  "token": "tu_token_jwt"
}
```

🔸 Uso del token:
En las rutas protegidas agregá este header:
```
Authorization: Bearer TU_TOKEN
```

---

## 📦 Rutas disponibles

Todas las rutas de `/api/products` requieren autenticación.

| Método | Ruta                          | Descripción                      |
|--------|-------------------------------|----------------------------------|
| GET    | `/api/products`               | Obtener todos los productos      |
| GET    | `/api/products/:id`           | Obtener un producto por ID       |
| POST   | `/api/products/create`        | Crear un nuevo producto          |
| DELETE | `/api/products/:id`           | Eliminar un producto por ID      |

---

## 🧪 Ejemplos de uso con Postman

🔹 Obtener token:
- `POST` → `http://localhost:3000/auth/login`

🔹 Obtener productos:
- `GET` → `http://localhost:3000/api/products`
- Header:
  ```
  Authorization: Bearer TU_TOKEN
  ```

🔹 Crear producto:
- `POST` → `http://localhost:3000/api/products/create`
- Headers:
  ```
  Authorization: Bearer TU_TOKEN
  Content-Type: application/json
  ```
- Body:
  ```json
  {
    "nombre": "Camiseta",
    "descripcion": "Camiseta de algodón",
    "precio": 49.99
  }
  ```

🔹 Eliminar producto:
- `DELETE` → `http://localhost:3000/api/products/ID_DEL_PRODUCTO`
- Header:
  ```
  Authorization: Bearer TU_TOKEN
  ```

---

## 🌐 Deploy en Render

La API está desplegada en Render y disponible en:

🔗 https://node-products-api-sge6.onrender.com

Recordá usar un token válido para acceder a las rutas protegidas.

---

## 🧠 Tecnologías usadas

- Node.js
- Express.js
- Firebase Firestore
- JWT (jsonwebtoken)
- Joi (validación)
- Dotenv

---

## 📁 Estructura del proyecto

```
src/
├── config/             # Configuración de Firebase
├── controllers/        # Lógica de manejo de rutas
├── middlewares/        # Middleware de autenticación JWT
├── models/             # Conexión a Firestore
├── routes/             # Definición de endpoints
├── services/           # Lógica de negocio
└── index.js            # Entrada principal del servidor
```

---

## 📌 Notas importantes

- El token tiene una validez de 1 hora.
- Firestore debe tener una colección activa llamada `products`.
- No se usa base de datos SQL; toda la información se guarda en Firestore.
- El archivo `firebase-key.json` no debe subirse a Git.

---

## 👨‍💻 Autor

Desarrollado por **Alex Gilberto Yucra Soto** como proyecto final del curso de Backend con Node.js. 🚀
