# Formularios

### Introducción

En esta fase del proyecto se implementan los formularios principales de la aplicación utilizando React con TypeScript.

Los formularios permiten al usuario interactuar con el sistema, principalmente para autenticación (login y registro), manteniendo control sobre los datos introducidos.

El objetivo es manejar inputs controlados, validación básica y conexión con el backend y Firebase.

### Tipos de formularios implementados}

--- Login

Formulario utilizado para que el usuario inicie sesión en la aplicación.

Permite introducir:

-Email
-Contraseña

Una vez enviados los datos, se realiza la autenticación con Firebase y se obtiene un token de sesión.

### Register

Formulario utilizado para la creación de nuevos usuarios.

Permite introducir:

Nombre
Email
Contraseña

El proceso incluye dos pasos:

Creación del usuario en Firebase Authentication
Creación del perfil en el backend (base de datos)

### Manejo de estado

Los formularios utilizan useState para controlar los inputs.

Cada campo es un componente controlado, lo que significa que:

El valor del input está sincronizado con el estado
Cada cambio actualiza el estado en tiempo real

Esto permite un control total sobre los datos del formulario.

### Validaciones básicas

Antes de enviar los datos se realizan comprobaciones simples como:

Campos obligatorios no vacíos
Email válido (validación básica del navegador)
Contraseña mínima aceptable (según Firebase)

Si alguna validación falla, se muestra un mensaje al usuario.

### Conexión con backend y Firebase

Los formularios interactúan con dos sistemas:

--- Firebase Authentication
Registr de usuarios
Login
Generación de token JWT
--- Backend propio (Express)
Creación de perfil de usuario
Almacenamiento de datos adicionales
Gestión de usuarios en base de datos

### Manejo de sesión

Una vez autenticado el usuario:

Se guarda el usuario en el AuthContext
Se almacena el token en localStorage
Se permite acceso a rutas protegidas

Esto mantiene la sesión activa incluso al refrescar la página.

### UX y experiencia de usuario

Los formularios están diseñados para:

Ser simples e intuitivos
Mostrar feedback claro enerrores
Mantener consistencia visual con Tailwind CSS
Estilo Flow RD (gradientes rojos, naranjas y amarillos)

### Objetivo de esta fase

El objetivo principal es construir formularios funcionales y conectados al sistema de autenticación, asegurando:

-Control de datos del usuario
-Integración con Firebase ybackend
-Experiencia de usuario fluida
-Base sólida para futuras funcionalidades