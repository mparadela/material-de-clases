        let input = document.getElementById("tareaInput");
        let botonAgregar = document.getElementById("agregar");
        let lista = document.getElementById("listaTareas");
        
        // Array para guardar tareas
        let tareas = [];
        
        // Función para mostrar tareas
        function mostrarTareas() {
            lista.innerHTML = ""; // Limpiar lista
            
            tareas.forEach(function(tarea, index) {
                let li = document.createElement("li");
                li.textContent = tarea;
                
                // Botón eliminar
                let btnEliminar = document.createElement("button");
                       btnEliminar.textContent = "Eliminar";   
                btnEliminar.addEventListener("click", function() {
                    tareas.splice(index, 1); // Eliminar del array
                    mostrarTareas(); // Actualizar vista
                    guardarTareas(); // Guardar cambios
                });
                
                li.appendChild(btnEliminar);
                lista.appendChild(li);
            });
        }
        
        // Función para guardar en localStorage
        function guardarTareas() {
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }
        
        // Función para cargar de localStorage
        function cargarTareas() {
            let tareasGuardadas = localStorage.getItem("tareas");
            if (tareasGuardadas) {
                tareas = JSON.parse(tareasGuardadas);
                mostrarTareas();
            }
        }
        
        // Agregar tarea
        botonAgregar.addEventListener("click", function() {
            let nuevaTarea = input.value;
            
            if (nuevaTarea === "") {
                alert("Escribe una tarea");
                return;
            }
            
            tareas.push(nuevaTarea);
            input.value = ""; // Limpiar input
            mostrarTareas();
            guardarTareas();
        });
        
        // Cargar tareas al inicio
        cargarTareas();