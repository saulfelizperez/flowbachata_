# FlowBachata

## Logline

Una plataforma fullstack para aprender, seguir y vivir la bachata de forma estructurada, conectando progreso, comunidad y eventos reales.

## Descripción breve

FlowBachata es una aplicación web fullstack desarrollada con React, TypeScript, Node.js y Firebase. Permite a los usuarios registrarse, iniciar sesión, acceder a un dashboard personalizado y explorar contenido relacionado con la bachata, incluyendo festivales, progreso de aprendizaje y gestión de usuario.

## Despliegue
Plataforma	URL
Frontend	Vercel
Backend	Render / Cloud Server
## Características
Sistema completo de autenticación (registro + login con Firebase)
Dashboard con contenido dinámico y personalizado por usuario
Integración frontend + backend con API REST centralizada
Gestión de usuarios y progreso en base de datos
Routing protegido con React Router
## Tecnologías
Frontend | Uso
Tecnología	Uso
React	Interfaz de usuario
TypeScript	Tipado y escalabilidad
Tailwind CSS	Estilos rápidos y consistentes
React Router	Navegación entre páginas
Firebase Auth	Autenticación de usuarios
Backend | Uso
Tecnología	Uso
Node.js	Servidor principal
Express	API REST
Firebase Admin	Verificación de tokens
Firestore	Base de datos
CORS	Comunicación frontend-backend
Auxiliares | Uso
Tecnología	Uso
Vercel	Deploy frontend
Render / Hosting cloud	Deploy backend
GitHub	Control de versiones
dotenv	Variables de entorno
## Estructura del proyecto
```Bash
flowbachata/
├── client/                          # Frontend (React + Vite + TypeScript)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── src/
│       ├── api/
│       │   └── client.ts           # API Client centralizado
│       │
│       ├── assets/                 # Imágenes, iconos, etc.
│       │
│       ├── components/            # Componentes reutilizables
│       │   ├── ui/
│       │   │   ├── Button.tsx
│       │   │   ├── Input.tsx
│       │   │   └── Card.tsx
│       │
│       ├── context/               # Context API (Auth)
│       │   └── AuthContext.tsx
│       │
│       ├── hooks/                 # Custom hooks
│       │
│       ├── pages/                 # Vistas principales
│       │   ├── Login/
│       │   ├── Register/
│       │   ├── Dashboard/
│       │
│       ├── routes/                # React Router
│       │   ├── AppRouter.tsx
│       │   ├── ProtectedRoute.tsx
│       │
│       ├── types/                 # Tipos TypeScript
│       │   ├── user.ts
│       │   ├── progress.ts
│       │
│       ├── utils/                # Funciones auxiliares
│       │
│       ├── config/
│       │   └── firebase.ts        # Firebase client config
│       │
│       ├── main.tsx
│       └── App.tsx
│
├── server/                         # Backend (Node.js + Express + Firebase Admin)
│   ├── package.json
│   ├── tsconfig.json
│   ├── vercel.json
│   └── src/
│       ├── index.ts               # Entry point
│       ├── app.ts                 # Config express
│       │
│       ├── config/
│       │   └── firebase.ts        # Firebase Admin SDK
│       │
│       ├── routes/
│       │   ├── auth.routes.ts
│       │   ├── user.routes.ts
│       │   ├── progress.routes.ts
│       │
│       ├── controllers/
│       │   ├── auth.controller.ts
│       │   ├── user.controller.ts
│       │   ├── progress.controller.ts
│       │
│       ├── services/
│       │   ├── user.service.ts
│       │
│       ├── middleware/
│       │   └── verifyToken.ts
│       │
│       ├── utils/
│
├── docs/                          # Documentación del proyecto
│   ├── apiClient.md
│   ├── forms.md
│   ├── routing.md
│   ├── deployment.md
│   ├── project-management.md
│   └── retrospective.md
│
├── .gitignore
├── README.md
└── package.json (opcional root)
```
## Descargar y ejecutar
```Bash
git clone https://github.com/saulfelizperez/flowbachata_.git

cd flowbachata_

Frontend

cd client

npm install

npm run dev
```

### Backend
```Bash
cd server
npm install
npm run dev
```

## Desplegar en Vercel
```Bash
Frontend

Conectar repositorio a Vercel

Configurar framework: Vite
```
Añadir variable de entorno:

Enlace: https://flowbachata.vercel.app/

Deploy automático

### Backend

Subir a Render o servidor cloud

Configurar build:
```Bash
npm install && npm run build
```
Start:
```Bash
node dist/server.js

Configurar variables de entorno (Firebase + puerto)
```
## Nota final

FlowBachata está diseñada como una base de informacion en la que cualquier persona que desee adentrarse al mundo de la bachata y le falte un comunidad, entender como moverse y saber a que sitios ir, puede acudir a flowBachata.