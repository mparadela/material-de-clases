// ============================================
// EJERCICIO BONUS: GESTIÓN DE TAREAS CON DRAG & DROP
// ============================================

// 1. CONSTANTES
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const NUM_TAREAS = 5;

// 2. SELECCIÓN DE ELEMENTOS DEL DOM
const listaTareas = document.querySelector("#lista-tareas");
const loading = document.querySelector("#loading");

// 3. VARIABLES GLOBALES
let tareas = [];
let tareaArrastrada = null;

// 4. CLASE TAREA
class Tarea {
    constructor(id, titulo, completada) {
        this.id = id;
        this.titulo = titulo;
        this.completada = completada;
    }
    
    toggleCompletada() {
        this.completada = !this.completada;
    }
}

// 5. FUNCIÓN: CARGAR TAREAS DE LA API
async function cargarTareas() {
    try {
        mostrarLoading();
        
        const response = await fetch(`${API_URL}?_limit=${NUM_TAREAS}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const datos = await response.json();
        
        // Crear objetos Tarea
        tareas = datos.map(t => new Tarea(t.id, t.title, t.completed));
        
        mostrarTareas();
        
    } catch (error) {
        console.error("Error al cargar tareas:", error);
        listaTareas.innerHTML = '<p class="mensaje-vacio">Error al cargar las tareas</p>';
    } finally {
        ocultarLoading();
    }
}

// 6. FUNCIÓN: MOSTRAR TAREAS
function mostrarTareas() {
    listaTareas.innerHTML = "";
    
    if (tareas.length === 0) {
        listaTareas.innerHTML = '<p class="mensaje-vacio">No hay tareas</p>';
        return;
    }
    
    tareas.forEach(tarea => {
        const tareaDiv = document.createElement("div");
        tareaDiv.className = `tarea-item ${tarea.completada ? 'completada' : ''}`;
        tareaDiv.draggable = true;
        tareaDiv.dataset.id = tarea.id;
        
        tareaDiv.innerHTML = `
            <span class="drag-handle">☰</span>
            <div class="tarea-checkbox"></div>
            <div class="tarea-texto">${tarea.titulo}</div>
            <span class="tarea-id">#${tarea.id}</span>
        `;
        
        // Event listeners de drag & drop
        tareaDiv.addEventListener("dragstart", handleDragStart);
        tareaDiv.addEventListener("dragend", handleDragEnd);
        tareaDiv.addEventListener("dragover", handleDragOver);
        tareaDiv.addEventListener("dragleave", handleDragLeave);
        tareaDiv.addEventListener("drop", handleDrop);
        
        // Click para marcar/desmarcar
        tareaDiv.addEventListener("click", () => toggleTarea(tarea.id));
        
        listaTareas.appendChild(tareaDiv);
    });
}

// 7. FUNCIÓN: MARCAR/DESMARCAR TAREA
function toggleTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.toggleCompletada();
        mostrarTareas();
    }
}

// 8. EVENT HANDLERS DE DRAG & DROP
function handleDragStart(e) {
    tareaArrastrada = this;
    this.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move";
}

function handleDragEnd(e) {
    this.classList.remove("dragging");
    
    // Quitar clase drag-over de todos los elementos
    document.querySelectorAll(".tarea-item").forEach(item => {
        item.classList.remove("drag-over");
    });
}

function handleDragOver(e) {
    e.preventDefault(); // ⚠️ CRÍTICO
    
    if (this !== tareaArrastrada) {
        this.classList.add("drag-over");
    }
    
    e.dataTransfer.dropEffect = "move";
}

function handleDragLeave(e) {
    this.classList.remove("drag-over");
}

function handleDrop(e) {
    e.preventDefault(); // ⚠️ CRÍTICO
    
    this.classList.remove("drag-over");
    
    if (this !== tareaArrastrada) {
        // Reordenar en el array
        const idArrastrada = parseInt(tareaArrastrada.dataset.id);
        const idDestino = parseInt(this.dataset.id);
        
        const indexArrastrada = tareas.findIndex(t => t.id === idArrastrada);
        const indexDestino = tareas.findIndex(t => t.id === idDestino);
        
        // Eliminar de posición original
        const [tareaMovida] = tareas.splice(indexArrastrada, 1);
        
        // Insertar en nueva posición
        tareas.splice(indexDestino, 0, tareaMovida);
        
        // Actualizar vista
        mostrarTareas();
    }
}

// 9. FUNCIONES AUXILIARES
function mostrarLoading() {
    loading.classList.remove("oculto");
}

function ocultarLoading() {
    loading.classList.add("oculto");
}

// 10. INICIALIZACIÓN
cargarTareas();