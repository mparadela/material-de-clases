# EJERCICIOS DE PRÁCTICA - FORMATO EXAMEN

---

### Estrategia de resolución:

1. **Lee el enunciado completo** - no empieces a programar hasta entender todo
2. **Identifica los métodos clave** - ¿qué métodos de array necesito? ¿qué eventos?
3. **Escribe la estructura base** - HTML, seleccionar elementos, función principal vacía
4. **Implementa paso a paso** - una funcionalidad cada vez, probando constantemente
5. **Añade validaciones** - al final, cuando todo funcione
6. **Refina la presentación** - mejora los mensajes, formato, estilos

---

## CHECKLIST PRE-EXAMEN

Si puedes hacer estos 2 ejercicios perfectamente, estás listo para el examen:

- [ ] Lista de Compras
- [ ] Analizador de Notas

---

## EJERCICIO 1: LISTA DE COMPRAS INTELIGENTE

Crea una aplicación web para gestionar una lista de compras con control de presupuesto.

### Funcionalidades requeridas:

La aplicación debe permitir al usuario:

1. **Agregar productos** introduciendo:
   - Nombre del producto
   - Cantidad
   - Precio unitario (€)

2. **Visualizar cada producto** en la lista mostrando:
   - Un checkbox (inicialmente desmarcado)
   - El nombre del producto
   - La cantidad (formato: "x2")
   - El subtotal (cantidad × precio, formato: "5.40€")
   - Un botón "Eliminar"

3. **Marcar productos como comprados**:
   - Al marcar el checkbox, debe aplicarse un estilo visual diferente (texto tachado, color distinto, etc.)
   - Al desmarcar, volver al estilo normal

4. **Eliminar productos individuales** mediante el botón "Eliminar"

5. **Limpiar productos comprados**: Un botón que elimine todos los productos que tengan el checkbox marcado

6. **Mostrar un resumen** con:
   - Total de productos en la lista
   - Cantidad de productos comprados (checkbox marcado)
   - Presupuesto total (suma de todos los subtotales)
   - Ya gastado (suma de subtotales de productos comprados)
   - Restante (presupuesto total - ya gastado)

7. **Validaciones**:
   - El nombre del producto no puede estar vacío
   - La cantidad debe ser un número entero positivo (mínimo 1)
   - El precio debe ser un número positivo mayor que 0
   - Mostrar alertas descriptivas si hay errores

8. **Persistencia de datos**:
   - Guardar todos los productos en localStorage
   - Mantener el estado de los checkboxes (comprado/no comprado)
   - Cargar automáticamente los productos al iniciar la página

### Consideraciones técnicas:
- Los campos de entrada deben limpiarse después de agregar un producto
- Todos los cálculos deben actualizarse en tiempo real
- El resumen debe reflejar siempre el estado actual de la lista

---

## EJERCICIO 2: ANALIZADOR DE NOTAS DE CLASE

Crea una aplicación web que analice las notas de una clase de estudiantes y muestre estadísticas completas.

### Funcionalidades requeridas:

La aplicación debe permitir al usuario:

1. **Introducir datos**:
   - Un área de texto donde el usuario introduce las notas de los estudiantes separadas por comas
   - Ejemplo de entrada: `7, 5, 9, 3.5, 8, 6, 10, 5, 7.5, 4`
   - Un botón "Analizar Notas" que procese los datos

2. **Validaciones**:
   - El campo de entrada no puede estar vacío
   - Todos los valores deben ser números válidos
   - Las notas deben estar entre 0 y 10
   - Debe haber un mínimo de 5 notas para realizar el análisis
   - Mostrar alertas descriptivas si hay errores

3. **Calcular y mostrar estadísticas básicas**:
   - Nota media de la clase
   - Nota máxima
   - Nota mínima
   - Total de estudiantes

4. **Mostrar distribución de notas**:
   - Cantidad de suspensos (notas menores a 5)
   - Cantidad de aprobados (notas entre 5 y 6.9)
   - Cantidad de notables (notas entre 7 y 8.9)
   - Cantidad de sobresalientes (notas entre 9 y 10)

5. **Calcular porcentajes y análisis adicional**:
   - Porcentaje de estudiantes aprobados (nota >= 5)
   - Cantidad de estudiantes con nota por encima de la media
   - Cantidad de estudiantes con nota por debajo de la media

6. **Mostrar ranking**:
   - Listado de todas las notas ordenadas de mayor a menor

### Consideraciones técnicas:
- Todos los resultados deben mostrarse de forma clara y organizada
- Los valores decimales deben mostrarse con 2 decimales (donde aplique)
- La presentación debe incluir etiquetas descriptivas para cada estadística

---

## EJERCICIO 3: GESTOR DE CONTACTOS

Crea una aplicación web para gestionar una agenda de contactos con funciones de búsqueda, filtrado y favoritos.

### Funcionalidades requeridas:

La aplicación debe permitir al usuario:

1. **Agregar contactos** introduciendo:
   - Nombre completo
   - Teléfono (9 dígitos)
   - Email
   - Categoría (Familia, Amigos, Trabajo)

2. **Visualizar cada contacto** mostrando:
   - Una estrella para marcar/desmarcar como favorito (☆/★)
   - Nombre completo
   - Teléfono
   - Email
   - Categoría
   - Botón "Eliminar"

3. **Marcar contactos como favoritos**:
   - Al hacer clic en la estrella, alternar entre favorito (★) y no favorito (☆)
   - Los contactos favoritos deben aparecer primero en la lista

4. **Buscar contactos**:
   - Un campo de búsqueda que filtre contactos en tiempo real mientras el usuario escribe
   - La búsqueda debe encontrar coincidencias en el nombre (sin distinguir mayúsculas/minúsculas)
   - Si el campo está vacío, mostrar todos los contactos según el filtro de categoría activo

5. **Filtrar por categoría**:
   - Botones para filtrar: "Todos", "Familia", "Amigos", "Trabajo"
   - Solo un botón puede estar activo a la vez (aplicar estilo visual distintivo)
   - El filtro y la búsqueda deben funcionar simultáneamente

6. **Mostrar estadísticas**:
   - Total de contactos guardados
   - Cantidad de contactos visibles según búsqueda y filtros activos

7. **Validaciones**:
   - El nombre debe tener mínimo 3 caracteres
   - El teléfono debe contener exactamente 9 dígitos numéricos
   - El email debe contener @ y un punto (.)
   - No permitir contactos duplicados (mismo teléfono)
   - Mostrar alertas descriptivas si hay errores

8. **Persistencia de datos**:
   - Guardar todos los contactos en localStorage
   - Mantener el estado de favoritos
   - Cargar automáticamente los contactos al iniciar la página

### Consideraciones técnicas:
- Los campos de entrada deben limpiarse después de agregar un contacto
- Las estadísticas deben actualizarse en tiempo real
- Los contactos favoritos siempre deben aparecer primero, seguidos por el resto ordenados alfabéticamente

---