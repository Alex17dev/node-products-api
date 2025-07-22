# 🛒 API REST de Productos con Node.js + Firebase

Este proyecto es una API RESTful construida con **Node.js**, **Express.js** y **Firebase Firestore** como base de datos. La API permite realizar operaciones CRUD sobre productos y cuenta con autenticación mediante JWT para proteger las rutas sensibles.

---

## 🚀 ¿Cómo iniciar el proyecto?

1. **Cloná o descargá el repositorio**
2. Instalar dependencias:

```bash
npm install
```

3. Crear un archivo `.env` con las siguientes variables:

```env
PORT=3000
JWT_SECRET=miclaveultrasecreta
```

4. Asegurate de tener el archivo `firebase-key.json` en la raíz del proyecto (clave de servicio de Firebase).

5. Iniciar el servidor:

```bash
npm start
```

La API estará disponible en:  
👉 `http://localhost:3000`

---

## 🔐 Autenticación

Antes de usar las rutas protegidas, tenés que autenticarte usando el endpoint:

### `POST /auth/login`

#### 🔸 Body esperado:

```json
{
  "email": "admin@admin.com",
  "password": "123456"
}
```

#### 🔸 Respuesta:

```json
{
  "token": "tu_token_jwt"
}
```

Este token debe enviarse en las rutas protegidas usando el encabezado:

```
Authorization: Bearer TU_TOKEN
```

---

## 📦 Rutas disponibles

Todas las rutas de `/api/products` requieren autenticación con token.

| Método | Ruta                       | Descripción                    |
|--------|----------------------------|--------------------------------|
| GET    | `/api/products`            | Obtener todos los productos   |
| GET    | `/api/products/:id`        | Obtener un producto por ID     |
| POST   | `/api/products/create`     | Crear un nuevo producto        |
| DELETE | `/api/products/:id`        | Eliminar un producto por ID    |

---

## 🧪 Ejemplos de uso con Postman

### 🔹 Obtener token

1. `POST` → `http://localhost:3000/auth/login`  
   Body (JSON):
   ```json
   {
     "email": "admin@admin.com",
     "password": "123456"
   }
   ```

### 🔹 Obtener todos los productos

2. `GET` → `http://localhost:3000/api/products`  
   Headers:
   ```
   Authorization: Bearer TU_TOKEN
   ```

### 🔹 Crear un producto

3. `POST` → `http://localhost:3000/api/products/create`  
   Headers:
   ```
   Authorization: Bearer TU_TOKEN
   Content-Type: application/json
   ```

   Body (JSON):
   ```json
   {
     "nombre": "Camiseta",
     "descripcion": "Camiseta de algodón",
     "precio": 49.99
   }
   ```

### 🔹 Eliminar un producto

4. `DELETE` → `http://localhost:3000/api/products/ID_DEL_PRODUCTO`  
   Headers:
   ```
   Authorization: Bearer TU_TOKEN
   ```

---

## 🧠 Tecnologías usadas

- Node.js
- Express.js
- Firebase Firestore
- JWT (jsonwebtoken)
- Dotenv
- Joi (validaciones)

---

## 📁 Estructura del proyecto

```
src/
├── config/             # Configuración de Firebase
├── controllers/        # Lógica de rutas
├── middlewares/        # Middleware de autenticación
├── models/             # Conexión con Firestore
├── routes/             # Endpoints de la API
├── services/           # Lógica de negocio
└── index.js            # Punto de entrada del servidor
```

---

## 📝 Notas

- El token expira en 1 hora.
- Firestore debe tener habilitada la API y una colección llamada `products`.
- No se utiliza base de datos SQL, toda la información se guarda en Firestore.

---

## 📫 Autor

Desarrollado por **Alex Gilberto Yucra Soto** como proyecto final de backend con Node.js 🚀
