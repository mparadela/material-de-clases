// Referencias a elementos del DOM
const inputTarea = document.getElementById('inputTarea');
const btnAnadir = document.getElementById('btnAnadir');
const listaTareas = document.getElementById('listaTareas');

// Array para almacenar las tareas
let tareas = [];

// Al cargar la página, recuperar tareas de localStorage
window.addEventListener('DOMContentLoaded', cargarTareas);

// Evento para añadir tarea al hacer clic en el botón
btnAnadir.addEventListener('click', anadirTarea);

// También permitir añadir con Enter (opcional pero recomendable)
inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        anadirTarea();
    }
});

/**
 * Función para añadir una nueva tarea
 */
function anadirTarea() {
    // Obtener el texto del input y eliminar espacios en blanco
    const textoTarea = inputTarea.value.trim();
    
    // Validar que no esté vacío
    if (textoTarea === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    
    // Añadir tarea al array
    tareas.push(textoTarea);
    
    // Guardar en localStorage
    guardarEnLocalStorage();
    
    // Actualizar la interfaz
    mostrarTareas();
    
    // Limpiar el input
    inputTarea.value = '';
    
    // Devolver el foco al input
    inputTarea.focus();
}

/**
 * Función para eliminar una tarea por su índice
 */
function eliminarTarea(indice) {
    // Eliminar del array usando splice
    tareas.splice(indice, 1);
    
    // Guardar cambios en localStorage
    guardarEnLocalStorage();
    
    // Actualizar interfaz
    mostrarTareas();
}

/**
 * Función para mostrar todas las tareas en el DOM
 */
function mostrarTareas() {
    // Limpiar la lista actual
    listaTareas.innerHTML = '';
    
    // Crear un <li> por cada tarea
    tareas.forEach((tarea, indice) => {
        // Crear el elemento li
        const li = document.createElement('li');
        
        // Añadir el texto de la tarea
        li.textContent = tarea + ' ';
        
        // Crear botón eliminar
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        
        // Añadir evento al botón eliminar
        btnEliminar.addEventListener('click', () => eliminarTarea(indice));
        
        // Añadir el botón al li
        li.appendChild(btnEliminar);
        
        // Añadir el li a la lista
        listaTareas.appendChild(li);
    });
}

/**
 * Función para guardar las tareas en localStorage
 */
function guardarEnLocalStorage() {
    // Convertir el array a JSON y guardarlo
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

/**
 * Función para cargar las tareas desde localStorage
 */
function cargarTareas() {
    // Obtener el string JSON del localStorage
    const tareasGuardadas = localStorage.getItem('tareas');
    
    // Si hay tareas guardadas
    if (tareasGuardadas) {
        // Convertir el JSON a array
        tareas = JSON.parse(tareasGuardadas);
        
        // Mostrar las tareas en la interfaz
        mostrarTareas();
    }
}
