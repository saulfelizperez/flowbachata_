# Introducción

En esta parte del proyecto se han creado componentes reutilizables utilizando React con TypeScript.

La idea principal es construir una interfaz modular, donde cada pieza de UI se pueda reutilizar en diferentes partes de la aplicación sin repetir código.

Esto ayuda a mantener el proyecto más ordenado, escalable y fácil de mantener.

### Componentes principales
-- Button

Componente genérico para acciones del usuario dentro de la aplicación.

Se utiliza en navegación y acciones principales.

Props principales:

label: texto que se muestra en el botón
onClick: función que se ejecuta al hacer click
type: tipo de botón (button, submit)
variant: estilo visual del botón (ej. principal o secundario)

-- Input

Componente reutilizable para formularios.

Permite manejar diferentes tipos de entrada de datos de forma consistente en toda la app.

Props principales:

type: tipo de input (text, email, password)
placeholder: texto de ayuda dentro del input
value: valor actual del campo
onChange: función para actualizar el estado
### Card

Componente contenedor usado para agrupar información visualmente.

Se utiliza en secciones como dashboard, clases o contenido informativo.

Props principales:

children: contenido interno que se renderiza dentro de la tarjeta

--- Uso de TypeScript

Todos los componentes están tipads con interfaces, lo que permite:

Mayor control sobre los datos que reciben los componentes
Reducción de errores en tiempo de desarrollo
Mejor experiencia de autocmpletado en el editor
Código más mantenible a largo plazo

### Composición de componentes

Los componentes están diseñados para combinarse entre sí fácilmente.

Ejemplos de uso:

Formularios construidos con Input + Button
Secciones visuales usando Card con contenido dinámico
Layouts que combinan múltiples componentes reutilizables

### Estilos

Se utiliza Tailwind CSS como sistema de estilos principal.

Esto permite:

Estilos rápidos y consistentes
Diseño responsive sin complejidad extra
Mantener una estética uniforme en toda la aplicación (estilo RD Flow: rojo, naranja, amarillo)
### Objetivo de esta fase

El objetivo es construir una base sólida de componentes reutilizables que sirva como estructura principal de la interfaz.

Esto permite escalar la aplicación de forma ordenada, evitando duplicación de código y manteniendo consistencia visual en todo FlowBachata.