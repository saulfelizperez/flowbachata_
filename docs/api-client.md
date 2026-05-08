# Introducción

El apiClient es la capa principal de comunicación entre el frontend de FlowBachata y el backend.
```Bash
Su función es centralizar todas las peticiones HTTP, manejar la autenticación y evitar repetir lógica en cada componente.

El objetivo es mantener el proyecto limpio, escalable y fácil de mantener.
```
--- Configuración base
```Bash
La URL base del backend se define mediante variables de entorno:

VITE_API_URL = http://localhost:4000/api/v1
```
Si no existe esta variable, se utiliza una URL por defecto.

--- Autenticación

La autenticación se realiza mediante un token JWT almacenado en localStorage.

Este token se añade automáticamente en las peticiones protegidas mediante el header:

Authorization: Bearer <token>

Si el token es inválido o no existe, el backend devolverá un error 401 Unauthorized.

Funcionamiento general

El cliente está construido alrededor de una función base llamada request.

Esta función se encarga de:

Construir la URL final
Añadir headers necesarios
Incluir el token si existe
Ejecutar la petición HTTP
Convertir la respuesta a JSON
Gestionar errores

Esto evita repetir lógica en todo el proyecto.

MÓDULO USERS
-- Obtener todos los usuarios

Devuelve la lista completa de usuarios registrados.

GET /users
-- Obtener usuario por ID

Devuelve un usuario específico usando su UID.

GET /users/:uid
-- Crear usuario

Crea un nuevo usuario en la base de datos.

POST /users
```Bash
Body:

{
"uid": "string",
"name": "string",
"email": "string"
}
```
-- Actualizar usuario

Actualiza la información de un usuario existente.

PUT /users/:uid

-- Eliminar usuario

Elimina un usuario del sistema.

DELETE /users/:uid

MÓDULO AUTH

-- Usuario autenticado

Devuelve la información del usuario basado en el token JWT.

GET /auth/me

Manejo de errores

Todas las respuestas de error siguen un formato estándar:

{
error: "Mensaje de error"
}

Casos comunes:

Token inválido o inexistente → 401
Recurso no encontrado → 404
Error del servidor → 500

# Ejemplo de uso
```Bash
import { api } from "../api/client";

const usuarios = await api.getUsers();
console.log(usuarios);
```
