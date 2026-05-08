Deploymnet

### Introducción

En esta fase se realiza el despliegue (deployment) del proyecto FlowBachata, tanto del frontend como del backend.

El objetivo es llevar la aplicación desde un entorno de desarrollo local a un entorno en la nube, donde pueda ser accesible públicamente.

### Backend Deployment

El backend de FlowBachata está construido con Node.js + Express + Firebase Admin y se despliega como un servicio independiente.

🔧 Plataforma utilizada
Render / Vercel / servicio cloud compatible con Node.js

--- Proceso de despliegue

-Se sube el repositorio a GitHub.
-La plataforma conecta el repositorio directamente.
-Se ejecuta el comando de build:
-npm run build
-Se inicia el servidor:
-node dist/server.js

--- Variables de entorno

El backend necesita variables configuradas en producción:

Firebase credentials
Puerto del servidor
Configuración de CORS

--- Consideraciones

El backend debe estar compilado a JavaScript (dist/)
No se ejecuta directamente TypeScript en producción
Es importante mantener CORS configurado correctamente para permitir el frontend
### Frontend Deployment

El frontend está desarrollado con Vite + React + TypeScript + Tailwind CSS y se despliega en Vercel.

 Plataforma utilizada
Vercel
 Proceso de despliegue
Se conecta el repositorio de GitHub a Vercel.
Vercel detecta automáticamente el proyecto Vite.
Se ejecuta el build:
npm run build
Se genera la carpeta dist/ lista para producción.
 Configuración de rutas (IMPORTANTE)

Para evitar errores de rutas (como 404 en refresh), se configura vercel.json:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

Esto permite que React Router maneje las rutas correctamente.

### Variables de entorno del frontend

El frontend utiliza variables para conectar con el backend:

VITE_API_URL=https://tu-backend-url/api/v1

Esto permite cambiar entre desarrollo y producción fácilmente.

### Problemas comunes en deployment

Durante el despliegue pueden aparecer errores típicos:

-- Errores de TypeScript en build
-- Rutas 404 en Vercel
-- Falta de variables de entorno
-- Diferencias entre localhost y producción
-- CORS bloqueando peticiones

### Objetivo de esta fase

El objetivo del deployment es:

Publicar la aplicación online
Conectar frontend y backend correctamente
Asegurar que la app funciona igual en producción que en local
Preparar el proyecto para usuarios reales