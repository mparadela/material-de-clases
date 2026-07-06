# Ejercicio evaluable: Carrito de Compra con localStorage

**Módulo:** DWEC - Desarrollo Web en Entorno Cliente  
**Fecha:** 13 de noviembre de 2025  
**Fecha límite de entrega:** Hoy a las 14:00

---

## Descripción

Crear una aplicación web de **Carrito de Compra** que permita añadir productos, mostrar el total, eliminar productos, y que **persista los datos** usando `localStorage` y `JSON`.

---

## Importante

**En este ejercicio trabajarás SOLO el archivo `script.js`**

- El HTML ya está completo - NO lo modifiques (solo pon tu nombre en el footer)
- El CSS ya está completo - NO lo modifiques
- **Tu trabajo es completar el JavaScript** siguiendo las instrucciones

El objetivo es practicar:
- localStorage (guardar y cargar datos)
- JSON (stringify y parse)
- Lógica de programación (funciones, arrays, objetos)
- Manipulación del DOM

---

## Requisitos funcionales

Tu aplicación debe permitir:

1. **Añadir productos** al carrito
   - Cada producto tiene: nombre y precio
   - Validar que ambos campos tengan datos

2. **Mostrar lista de productos** en el carrito
   - Mostrar nombre y precio de cada producto
   - Botón para eliminar cada producto

3. **Calcular y mostrar el total** del carrito
   - Sumar todos los precios
   - Actualizar automáticamente al añadir/eliminar

4. **Eliminar productos** del carrito
   - Botón de eliminar por cada producto
   - Pedir confirmación antes de eliminar

5. **Persistencia con localStorage + JSON**
   - Guardar el carrito automáticamente al hacer cambios
   - Cargar el carrito al abrir/recargar la página

---

## Estructura de datos

Cada producto debe ser un **objeto** con esta estructura:

```javascript
{
  id: 1234567890.123,  // Generado automáticamente (timestamp + random)
  nombre: "Teclado",
  precio: 25
}
```

El carrito será un **array de objetos**:

```javascript
[
  { id: 1234567890.123, nombre: "Teclado", precio: 25 },
  { id: 1234567891.456, nombre: "Ratón", precio: 15 },
  { id: 1234567892.789, nombre: "Monitor", precio: 150 }
]
```

---

## Requisitos técnicos

### JavaScript obligatorio:

1. **Variables y constantes**
   - Array global para almacenar productos
   - Referencias al DOM con `getElementById()` o `querySelector()`

2. **Funciones requeridas:**
   ```javascript
   function guardarCarrito()        // Guardar en localStorage con JSON.stringify()
   function cargarCarrito()         // Cargar desde localStorage con JSON.parse()
   function agregarProducto()       // Añadir producto al array
   function eliminarProducto(id)    // Eliminar producto del array
   function renderizarCarrito()     // Mostrar productos en el DOM
   function calcularTotal()         // Sumar precios y mostrar total
   ```

3. **localStorage + JSON:**
   - Usar `JSON.stringify()` para guardar
   - Usar `JSON.parse()` para recuperar
   - Guardar después de cada cambio
   - Cargar al iniciar la aplicación

4. **Validaciones:**
   - Comprobar que nombre no esté vacío
   - Comprobar que precio sea un número válido
   - Mostrar alerta si faltan datos

---

## Interfaz mínima requerida

Tu HTML debe tener **como mínimo**:

- **Formulario para añadir productos:**
  - Input para el nombre del producto
  - Input para el precio (type="number")
  - Botón "Añadir al carrito"

- **Zona de visualización:**
  - Lista (ul/ol) o div para mostrar productos
  - Cada producto debe mostrar: nombre, precio y botón eliminar
  - Zona para mostrar el **total del carrito**

- **Mensaje cuando está vacío:**
  - Mostrar algo como "El carrito está vacío" si no hay productos

---

## Criterios de evaluación

| Criterio | Puntos |
|----------|--------|
| **Funcionalidad básica** | 4 puntos |
| - Añadir productos correctamente | 1 punto |
| - Eliminar productos correctamente | 1 punto |
| - Calcular total correctamente | 1 punto |
| - Mostrar productos en el DOM | 1 punto |
| **Persistencia (localStorage + JSON)** | 3 puntos |
| - Guardar con JSON.stringify() | 1 punto |
| - Cargar con JSON.parse() | 1 punto |
| - Los datos persisten al recargar | 1 punto |
| **Código y buenas prácticas** | 2 puntos |
| - Código comentado y limpio | 0.5 puntos |
| - Funciones bien organizadas | 0.5 puntos |
| - Validaciones correctas | 0.5 puntos |
| - Sin errores en consola | 0.5 puntos |
| **Interfaz y experiencia** | 1 punto |
| - Interfaz funcional y usable | 0.5 puntos |
| - Mensajes claros al usuario | 0.5 puntos |
| **TOTAL** | **10 puntos** |

---

## Restricciones

- NO usar librerías externas (jQuery, etc.)
- NO usar IndexedDB ni otras APIs de almacenamiento
- NO usar sessionStorage (debe ser localStorage)
- Solo JavaScript vanilla, HTML y CSS

---

## 📤 Entrega

1. Completa los archivos proporcionados:
   - `index.html` (estructura)
   - `script.js` (lógica JavaScript)
   - `styles.css` (estilos)

2. **Pon tu nombre** en el footer del HTML

3. Haz commit y push a tu repositorio de GitHub Classroom

4. **Fecha límite:** Hoy a las 14:00

---

## Pistas

- Empieza por las funciones de localStorage (guardar/cargar)
- Luego implementa agregar y eliminar sin preocuparte del DOM
- Después implementa renderizar
- Por último, añade validaciones y el total

**Estructura recomendada del código:**

```javascript
// 1. Variables globales
let carrito = [];

// 2. Funciones de localStorage
function guardarCarrito() { /* ... */ }
function cargarCarrito() { /* ... */ }

// 3. Funciones de lógica
function agregarProducto(nombre, precio) { /* ... */ }
function eliminarProducto(id) { /* ... */ }

// 4. Funciones de interfaz
function renderizarCarrito() { /* ... */ }
function calcularTotal() { /* ... */ }

// 5. Event listeners
// ...

// 6. Inicialización
carrito = cargarCarrito();
renderizarCarrito();
```

---

## Ayuda

Si tienes dudas, Revisa el ejemplo del **gestor de tareas** que hicimos en clase