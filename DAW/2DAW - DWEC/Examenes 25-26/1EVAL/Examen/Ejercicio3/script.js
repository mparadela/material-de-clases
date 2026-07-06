// Obtener todos los elementos de la lista
const tareas = document.querySelectorAll('#listaTareas li');

// Variable para guardar el elemento que se está arrastrando
let tareaArrastrada = null;

// Añadir eventos a cada tarea
tareas.forEach(tarea => {
    // Cuando empieza a arrastrarse
    tarea.addEventListener('dragstart', dragStart);
    
    // Cuando termina de arrastrarse
    tarea.addEventListener('dragend', dragEnd);
    
    // Cuando se pasa por encima de otro elemento
    tarea.addEventListener('dragover', dragOver);
    
    // Cuando entra en la zona de otro elemento
    tarea.addEventListener('dragenter', dragEnter);
    
    // Cuando sale de la zona de otro elemento
    tarea.addEventListener('dragleave', dragLeave);
    
    // Cuando se suelta en otro elemento
    tarea.addEventListener('drop', drop);
});

/**
 * Se ejecuta cuando empieza a arrastrarse
 */
function dragStart(e) {
    tareaArrastrada = this;
    
    // Guardar información en dataTransfer
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    
    // Añadir clase visual
    this.classList.add('arrastrando');
}

/**
 * Se ejecuta cuando termina de arrastrarse
 */
function dragEnd(e) {
    // Quitar la clase visual
    this.classList.remove('arrastrando');
    
    // Quitar la clase de todos los elementos
    tareas.forEach(tarea => {
        tarea.classList.remove('sobre');
    });
}

/**
 * Se ejecuta mientras se arrastra sobre un elemento
 * IMPORTANTE: preventDefault() es necesario para permitir el drop
 */
function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

/**
 * Se ejecuta cuando entra en la zona de drop
 */
function dragEnter(e) {
    if (this !== tareaArrastrada) {
        this.classList.add('sobre');
    }
}

/**
 * Se ejecuta cuando sale de la zona de drop
 */
function dragLeave(e) {
    this.classList.remove('sobre');
}

/**
 * Se ejecuta cuando se suelta el elemento
 */
function drop(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // Si el elemento soltado no es el mismo que el objetivo
    if (tareaArrastrada !== this) {
        // Obtener el padre (la lista ul)
        const lista = this.parentNode;
        
        // Insertar el elemento arrastrado antes del elemento sobre el que se soltó
        lista.insertBefore(tareaArrastrada, this);
    }
    
    return false;
}
