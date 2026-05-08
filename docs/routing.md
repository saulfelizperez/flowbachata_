# Navegacion (Routing)

## Introducción

En esta fase se implementa el sistema de routing de la aplicación FlowBachata utilizando React Router.

El objetivo es permitir la navegación entre diferentes páginas de la aplicación sin recargar el navegador, manteniendo una experiencia fluida tipo SPA (Single Page Application).

### Herramienta utilizada

Se utiliza React Router DOM, que permite gestionar rutas dentro del frontend de forma dinámica.

Esto facilita la navegación entre vistas como:

Login
Register
Dashboard
Páginas internas de la aplicación

### Estructura de rutas

La aplicación está organizada en rutas principales:

/Página principal o redirección
/login → Inicio de sesión
/register → Registro de usuario
/dashboard → Panel principal del usuario (protegido)
 Página 404 (no encontrada)
### Layout y estructura general

Se utiliza un sistema de Layout compartido, donde ciertas páginas comparten estructura base.

Esto permite mantener:

Navbar o estructura común
Estilos consistentes
Mejor organización del código

### Rutas protegidas

Algunas rutas requieren autenticación, especialmente el Dashboard.

Para ello se implementa un sistema de:

Verificación de token
Protección de rutas privadas
Redirección automática si el usuario no está autenticado

Si el usuario no tiene sesión válida, se le redirige a /login.

### Manejo de navegación

La navegación se gestiona mediante:

useNavigate() → redirecciones programáticas

<Link /> - navegación entre páginas sin recarga

Esto mejora la experiencia del usuario y evita recargar la aplicación.

### Página 404

Se implementa una ruta catch-all (*) para manejar URLs inválidas.

Esto permite:

Evitar pantallas en blanco
Mostrar un mensaje de error controlado
Redirigir o guiar al usuario de vuelta a la app

### Flujo de navegación

El flujo principal de la aplicación es:

Usuario entra a la app
Accede a Login o Register
Se autentica correctamente
Es redirigido al Dashboard
Puede navegar dentro de la app sin recargar

### Objetivo de esta fase

El objetivo del routing es garantizar una navegación clara, estructurada y protegida dentro de FlowBachata, asegurando que cada usuario acceda solo a las partes correspondientes de la aplicación.

### Resultado final

Al finalizar esta fase, la aplicación cuenta con:

Sistema de rutas completo
Navegación fluida tipo SPA
Rutas protegidas por autenticación
Manejo de páginas no encontradas
Estructura escalable para futuras páginas