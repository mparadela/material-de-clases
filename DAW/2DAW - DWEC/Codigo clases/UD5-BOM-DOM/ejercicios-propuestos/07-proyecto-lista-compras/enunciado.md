# Mini proyecto – Lista de la compra interactiva

Crea una app para gestionar una lista de la compra con los métodos del DOM.

## Requisitos mínimos
1. Campo de texto y botón para añadir productos.
2. Cada producto lleva botón ❌ para eliminarlo.
3. Clic sobre un producto = marcarlo como comprado (añadir clase `.comprado`).
4. Insertar un producto detrás de otro (según texto de referencia).
5. Duplicar productos coincidentes (según palabra buscada).
6. Vaciar lista completa (`innerHTML = ""`).

## Estilos sugeridos
- `.comprado { text-decoration: line-through; color: gray; }`
- `.duplicado { color: blue; }`

## Nivel extra
- Evitar duplicados exactos.
- Guardar en `localStorage` para que se conserve al recargar.
