        /*           
           1: "Agregar productos" --> hecho
           → Función: agregarProducto(). Debe: validar inputs (será función aparte), crear objeto producto, añadir al array, guardar, mostrar
           
           2: "Visualizar cada producto con checkbox, texto y botón eliminar" --> hecho
           → Función: mostrarProductos(). Debe: recorrer array, crear <li> para cada producto con checkbox + texto + botón
           
           3: "Marcar como comprado con checkbox" --> hecho
           → Función: toggleComprado(id). Debe: cambiar propiedad 'comprado' del producto, guardar, mostrar
           
           4: "Eliminar productos individuales" --> hecho
           → Función: eliminarProducto(id). Debe: quitar producto del array, guardar, mostrar
           
           5: "Limpiar productos comprados" --> hecho
           → Función: limpiarComprados(). Debe: filtrar array quitando los comprados, guardar, mostrar
           
           6: "Mostrar resumen: total, comprados, presupuesto, gastado, restante" -- hecho
           → Función: actualizarResumen()
           → Debe: contar productos, filtrar comprados, sumar subtotales, calcular restante
           
           7: "Validaciones: producto no vacío, cantidad >= 1, precio > 0" --> hecho
           → Función: validarInputs()
           → Debe: comprobar cada campo y mostrar alertas si hay error
           
           8: "Persistencia en localStorage" --> hecho
           → Función: guardarProductos() - stringify y setItem 
           → Función: cargarProductos() - getItem y parse
           
        */
        
        // MANEJAR EL DOM:  
        const inputProducto = document.getElementById("producto");
        const inputCantidad = document.getElementById("cantidad");
        const inputPrecio = document.getElementById("precioUnitario");
        const btnAgregar = document.getElementById("btnAgregar");
        const btnLimpiarComprados = document.getElementById("btnLimpiarComprados");
        const listaCompras = document.getElementById("listaCompras");
        
        // Spans del resumen
        const spanTotalProductos = document.getElementById("totalProductos");
        const spanProductosComprados = document.getElementById("productosComprados");
        const spanPresupuestoTotal = document.getElementById("presupuestoTotal");
        const spanGastado = document.getElementById("gastado");
        const spanRestante = document.getElementById("restante");

        
        // ARRAY DE PRODUCTOS
    
        let productos = [];
        
        // CARGAR DE LOCALSTORAGE
        
        function cargarProductos() {
            const productosGuardados = localStorage.getItem("listaCompras");
            
            if (productosGuardados) {
                productos = JSON.parse(productosGuardados);
                mostrarProductos();
            }
        }

        // GUARDAR EN LOCALSTORAGE
        
        function guardarProductos() {
            localStorage.setItem("listaCompras", JSON.stringify(productos));
        }

        // VALIDAR INPUTS
        
        function validarInputs() {
            const producto = inputProducto.value.trim();
            const cantidad = parseInt(inputCantidad.value);
            const precio = parseFloat(inputPrecio.value);

            if (producto === "") {
                alert("El producto no puede estar vacío");
                return false;
            }

            if (isNaN(cantidad) || cantidad < 1) {
                alert("La cantidad debe ser un número positivo");
                return false;
            }

            if (isNaN(precio) || precio <= 0) {
                alert("El precio debe ser mayor que 0");
                return false;
            }

            return true;
        }

        
        // AGREGAR PRODUCTO
        
        function agregarProducto() {
            if (!validarInputs()) {
                return;
            }

            const nuevoProducto = {
                id: Date.now(),
                producto: inputProducto.value.trim(),
                cantidad: parseInt(inputCantidad.value),
                precioUnitario: parseFloat(inputPrecio.value),
                comprado: false
            };

            productos.push(nuevoProducto);
            
            // Limpiar inputs --> no se pide expresamente, se puede hacer o no
            inputProducto.value = "";
            inputCantidad.value = "1";
            inputPrecio.value = "";
            inputProducto.focus();

            guardarProductos();
            mostrarProductos();
        }

        
        // MOSTRAR PRODUCTOS
        
        function mostrarProductos() {
            listaCompras.innerHTML = "";

            productos.forEach((producto) => {
                const subtotal = producto.cantidad * producto.precioUnitario;

                const li = document.createElement("li");
                
                // Aplicar clase si está comprado
                if (producto.comprado) {
                    li.classList.add("comprado");
                }

                // Checkbox
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = producto.comprado;
                checkbox.addEventListener("change", () => {
                    toggleComprado(producto.id);
                });

                // Texto del producto
                const texto = document.createTextNode(
                    ` ${producto.producto} x${producto.cantidad} - ${subtotal.toFixed(2)}€ `
                );

                // Botón eliminar
                const btnEliminar = document.createElement("button");
                btnEliminar.textContent = "Eliminar";
                btnEliminar.addEventListener("click", () => {
                    eliminarProducto(producto.id);
                });

                // Ensamblar
                li.appendChild(checkbox);
                li.appendChild(texto);
                li.appendChild(btnEliminar);
                listaCompras.appendChild(li);
            });

            actualizarResumen();
        }

        function toggleComprado(id) {
            const producto = productos.find(p => p.id === id);
            if (producto) {
                producto.comprado = !producto.comprado;
                guardarProductos();
                mostrarProductos();
            }
        }

        function eliminarProducto(id){
            productos = productos.filter(p => p.id !== id);
            guardarProductos();
            mostrarProductos();
        }

        function limpiarComprados() {
            productos = productos.filter (p => !p.comprado);
            guardarProductos();
            mostrarProductos();
        }
/*           6: "Mostrar resumen: total, comprados, presupuesto, gastado, restante"
           → Función: actualizarResumen()
           → Debe: contar productos, filtrar comprados, sumar subtotales, calcular restante */

        function actualizarResumen() {
            //contar
            spanTotalProductos.textContent = productos.length;

            //filtrar comprados
            const comprados = productos.filter(p => p.comprado).length
            spanProductosComprados.textContent = comprados;

            //Presupuesto total
            const presupuestoTotal = productos.reduce((sum, p) => {
                return sum + (p.cantidad * p.precioUnitario);
            }, 0);
            spanPresupuestoTotal.textContent = presupuestoTotal.toFixed(2);

            // ya gastado
            const gastado = productos
                .filter(p => p.comprado)
                .reduce((sum, p) => {
                    return sum + (p.cantidad*p.precioUnitario);
                }, 0);
            spanGastado.textContent = gastado.toFixed(2);

            const restante = presupuestoTotal - gastado;
            spanRestante.textContent = restante.toFixed(2);

        }

        // EventListener para que funcionen los botones

        btnAgregar.addEventListener("click", agregarProducto);
        
        btnLimpiarComprados.addEventListener("click", () =>{
            // esta parte es opcional para que se haya confirmación
            const cantidadComprados = productos.filter(p => p.comprado).length
            if (cantidadComprados === 0) {
                alert ("No hay productos comprados");
                return
            }
            const confirmar = confirm(`¿Eliminar ${cantidadComprados} producto(s)?`)
            if (confirmar) {
            // Hasta aquí lo opcional, limpiarComprados tiene que estar
                limpiarComprados();
            }
        });
         
        // Mejora opcional --> agregar los productos también con "Enter"
        inputProducto.addEventListener("keypress", (e) => {
            if (e.key === "Enter") agregarProducto();
        });

        inputCantidad.addEventListener("keypress", (e) => {
            if (e.key === "Enter") agregarProducto();
        });
        
        inputPrecio.addEventListener("keypress", (e) => {
            if (e.key === "Enter") agregarProducto();
        });

        // Mejora opcional --> agregar un botón para ordenar los productos por precio total
        function ordenarPorPrecio(){
            productos.sort((a,b) =>{
                const subtotalA = a.cantidad*a.precioUnitario;
                const subtotalB = b.cantidad*b.precioUnitario
                return subtotalB - subtotalA; 
            });
            guardarProductos();
            mostrarProductos();
        }

        const btnOrdenar = document.getElementById("btnOrdenar");
        btnOrdenar.addEventListener("click", ordenarPorPrecio);

        // ESTO TIENE QUE ESTAR SÍ O SÍ --> para cargar la lista guardada al cargar la página
        cargarProductos();



