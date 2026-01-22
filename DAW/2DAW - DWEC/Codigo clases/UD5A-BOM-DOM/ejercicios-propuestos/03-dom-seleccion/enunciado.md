# Ejercicio 3 – Selección del DOM

1. **Crea un documento HTML** con varios elementos:  
   - 3 párrafos (`<p>`)  
   - 2 divisiones (`<div>`)  
   - 1 encabezado (`<h2>`)

2. **Practica distintos métodos de selección del DOM**:  
   - Usa `getElementById()` para seleccionar un elemento concreto (por ejemplo, el `<h2>`).  
   - Usa `getElementsByClassName()` para seleccionar varios elementos con la misma clase (por ejemplo, todos los `<div>`).  
   - Usa `getElementsByTagName()` para obtener todos los párrafos.  
   - Usa `querySelector()` para seleccionar **el primer** elemento que coincida con un selector CSS.  
   - Usa `querySelectorAll()` para obtener **todos** los elementos que coincidan con un selector CSS (por ejemplo, todos los `<p>` con una clase).

3. **Muestra en consola**:  
   - El número total de párrafos encontrados.  
   - El texto del primero, y cámbialo usando `textContent`.

4. **Añade un botón** que, al pulsarlo, cambie el color de fondo de **todos los párrafos** (usando el resultado de `querySelectorAll()`).