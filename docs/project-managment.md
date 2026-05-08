# Gestion del Proyecto

### Introducción

En esta fase se organiza y gestiona el desarrollo del proyecto FlowBachata, definiendo cómo se estructuran las tareas, el flujo de trabajo y el seguimiento del progreso.

El objetivo es mantener un desarrollo ordenado, dividido en fases claras y con control sobre cada parte del sistema.

### Metodología de trabajo

El proyecto se ha desarrollado siguiendo un enfoque iterativo y por fases, donde cada bloque funcional se construye de forma progresiva.

Esto permite:

Avanzar paso a paso sin saturar el desarrollo
Detectar errores de forma temprana
Mantener control sobre el estado del proyecto
Mejorar la calidad del código final

### Organización por fases

El proyecto está dividido en diferentes fases técnicas:

Fase de preparación (setup del proyecto)
Fase de arquitectura frontend
Fase de componentes reutilizables
Fase de estado global (Context API)
Fase de routing y navegación
Fase de formularios
Fase de backend y API
Fase de integración frontend-backend
Fase de testing
Fase de deployment
Fase de documentación

Cada fase tiene un objetivo concreto y dependencias sobre la anterior.

### Estructura del repositorio

El proyecto está organizado como un monorepo:

/client   → Frontend (React + Vite + TypeScript)
/server   → Backend (Node.js + Express)
/docs     → Documentación del proyecto

Esto permite separar claramente responsabilidades y facilitar el mantenimiento.

### Gestión de tareas

Las tareas del proyecto se organizan de forma progresiva según prioridad:

- Funcionalidades críticas (auth, backend, routing)

-- Funcionalidades principales (UI, dashboard, forms)

--- Mejoras y extras (UX, animaciones, optimización)

Cada funcionalidad se desarrolla, prueba y valida antes de pasar a la siguiente fase.

### Control de versiones

Se utiliza Git + GitHub para el control de versiones del proyecto.

Buenas prácticas aplicadas:

Commits frecuentes y descriptivos
Separación por funcionalidades
Uso de ramas para cambios importantes (cuando es necesario)
Sincronización constante con el repositorio remoto

### Herramientas utilizadas

Git & GitHub → control de versiones
Vercel → despliegue frontend
Render / servidor cloud → backend
Firebase → autenticación y base de datos
VS Code → entorno de desarrollo
Vite → build tool del frontend

### Problemas encontrados

Durante el desarrollo se han encontrado varios retos:

Errores de TypeScript en producción
Desajustes entre frontend y backend
Problemas de rutas en deployment
Configuración de autenticación con Firebase
Gestión de tokens entre cliente y servidor

Estos problemas se han ido resolviendo de forma progresiva durante el desarrollo.

### Objetivo de la gestión del proyecto

El objetivo de esta fase es asegurar que el desarrollo de FlowBachata sea:

Ordenado
Escalable
Mantenible
Dividido en fases claras
Fácil de entender para cualquier desarrollador