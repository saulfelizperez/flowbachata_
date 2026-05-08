# FlowBachata - Arquitectura de la Aplicación

## 1. Visión general

FlowBachata es una aplicación web creada con React + TypeScript que permite a los usuarios aprender y seguir su progreso en bachata. La aplicación está orientada a una experiencia clara, modular y escalable.

El sistema está diseñado con una arquitectura frontend preparada para integrarse con una API REST.

---

## Arquitectura general

La aplicación sigue una arquitectura por capas:

### Capa de presentación (UI)

- React Components
- Pages (Home, Login, Register, Dashboard)
- Encargada de mostrar la interfaz al usuario

---

### Capa de lógica de UI

- Hooks personalizados (`hooks/`)
- Manejo de estado local (`useState`, `useEffect`)
- Lógica de interacción de componentes

---

### Capa de datos (API layer)

- Carpeta `api/`
- Encargada de gestionar llamadas HTTP
- Centraliza la comunicación con el backend

---

### Estado global

- Context API (`context/`)
- Manejo de usuario autenticado
- Estado compartido entre componentes

---

## Estructura de componentes

### Componentes reutilizables

- Button
- Input
- Card
- Navbar
- Layout

### Componentes de página

- Home → Página principal
- Login → Autenticación
- Register → Registro de usuario
- Dashboard → Progreso del usuario

---

## Gestión de estado

### Estado local

Se utiliza `useState` para:

- Formularios
- Inputs
- Estados visuales

### Estado global

Se utiliza Context API para:

- Usuario autenticado
- Sesión de login/logout

---

## Diseño de API (backend futuro)

La aplicación está preparada para consumir una API REST.

### Base URL

/api/v1

---

### Endpoints principales

#### Auth

- POST /auth/login
- POST /auth/register
- GET /auth/me

---

### Users

- GET /users/:id

- DEL /users/:id
---

## Tipos de datos (TypeScript)

### Usuario

```ts id="types1"
type User = {
  id: number;
  name: string;
  email: string;
};
```


### Distribución de datos

Los datos del sistema se distribuyen entre cliente y servidor según su naturaleza.

En el servidor se almacenan los datos persistentes, como los usuarios, la autenticación y el progreso del usuario.

En el cliente se gestionan datos temporales, como el estado de la interfaz, los formularios y otros estados locales necesarios para la interacción.

### Flujo de datos

El flujo de datos en la aplicación sigue el siguiente recorrido:

Usuario → Pages → Components → Hooks / Context → API → Backend

Este flujo permite mantener una separación clara entre interfaz, lógica y datos.

### Decisiones de arquitectura

Se ha elegido React junto con TypeScript para garantizar un desarrollo tipado y mantenible. La separación en capas facilita la escalabilidad del sistema y la organización del código.

Se utiliza Context API para el estado global por su simplicidad, evitando herramientas más complejas como Redux en esta fase del proyecto.

La centralización de la API en una carpeta específica permite desacoplar la lógica de red del resto de la aplicación.

### Objetivo del sistema

El objetivo de esta arquitectura es proporcionar una base sólida que permita escalar la aplicación, mantener el código de forma sencilla, reutilizar componentes y facilitar la futura integración con un backend real mediante API REST.
