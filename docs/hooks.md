# Hooks en FlowBachata

En FlowBachata se utilizan hooks de React para gestionar estado, reutilizar lógica y optimizar el rendimiento de la aplicación.

---

## 1. useAuth (Custom Hook)

Hook basado en Context API que gestiona la autenticación del usuario.

### Funcionalidades:
- Obtener usuario autenticado
- Iniciar sesión
- Cerrar sesión
- Compartir estado global de autenticación

### Uso:
Permite controlar el acceso a rutas privadas y mantener el estado del usuario en toda la aplicación.

---

## 2. useLocalStorage (Custom Hook)

Hook reutilizable para persistencia de datos en el navegador.

### Funcionalidades:
- Guardar datos en localStorage
- Recuperar datos al iniciar la app
- Sincronizar estado de React con almacenamiento local

### Uso:
Se utiliza para mantener información persistente entre recargas de página.

---

## 3. useForms (Custom Hook)

Hook para manejar formularios controlados.

### Funcionalidades:

- Gestión de inputs
- Actualización de estado del formulario
- Reutilización en Login y Register
- Validación básica de campos

### Uso:
Evita duplicación de lógica en formularios.

---

## 4. useState

Hook base de React utilizado para:
- Estado de formularios
- UI interactiva
- Control de autenticación

---

## 5. useEffect

Hook utilizado para manejar efectos secundarios como:
- Sincronización con localStorage
- Ejecución de lógica al montar componentes

---

## 6. useMemo (optimización)

Hook utilizado para optimizar cálculos costosos evitando recalcular valores innecesariamente.

Ejemplo de uso:
- Filtrado de listas de clases o eventos

---

## 7. useCallback (optimización)

Hook utilizado para memorizar funciones y evitar re-renderizados innecesarios.

Ejemplo de uso:
- Handlers en formularios
- Funciones pasadas a componentes hijos

---

# Conclusión

Los hooks en FlowBachata permiten:
- Reutilización de lógica
- Mejor rendimiento
- Separación de responsabilidades
- Código más limpio y escalable