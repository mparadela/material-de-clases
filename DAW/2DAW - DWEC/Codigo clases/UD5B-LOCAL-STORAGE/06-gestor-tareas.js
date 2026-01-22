//Array que vontiene todas las tareas

let tareas = [];

//Referencias al SOM

const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');
const contador = document.getElementById('contador');

//Funciones de localStorage

//Guardar el array de tareas en localStorage

function guardarTareasenStorage() {
    const tareasJSON = JSON.stringify(tareas);
    localStorage.setItem('tareas', tareasJSON);
    console.log('Tareas guardadas en localStorage: ', tareas);
}

//Cargar las tareas desde localStorage

function cargarTareasDesdeStorage() {
    const tareasJSON = localStorage.getItem('tareas');
    if (!tareasJSON) {
        console.log('No hay tareas guardadas');
        return[];
    }
    try {
        const tareasRecuperadas = JSON.parse(tareasJSON);
        console.log('Tareas cargadas desde localStorage: ',tareasRecuperadas);
        return tareasRecuperadas;
    } catch (error) {
        console.error('Error al parsear tareas: ',error);
        return [];
    }
}

//Funciones de lógica de programa

//Genera un ID para cada tarea. Usa timestamp + número aleatorio

function generarId() {
    return Date.now() + Math.random();
};

//Agrega una nueva tarea al array

function agregarTarea (texto){
    if (!texto.trim()) {
        alert('Escribe algo antes de agregar');
        return;
    }
    const nuevaTarea = {
        id: generarId(),
        texto: texto.trim(),
        completada: false
    }
    tareas.push(nuevaTarea);
    guardarTareasenStorage();
    renderizarTareas();
    inputTarea.value = '';
    inputTarea.focus();
}

//Marca o desmarca una tarea como completada
function toggleCompletada(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        guardarTareasenStorage();
        renderizarTareas();
    }
}

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareasenStorage();
    renderizarTareas();
}

//Funciones de interfaz (renderizado)

function renderizarTareas(){
    listaTareas.innerHTML = '';
    if(tareas.length === 0){
        listaTareas.innerHTML = `
            <div class="vacio">
                <p>No hay tareas. ¡Agrega una para empezar!</p
            </div>
            `;
        actualizarContador();
        return;
    }

    //Crear elementos HTML para cada tarea
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.className = `tarea-item ${tarea.completada ? 'completada':''}`;
        li.innerHTML = `
            <input
                type = "checkbox"
                class= "tarea-checkbox"
                ${tarea.completada ? 'checked' : ''}
                data-id = "${tarea.id}"
            >
            <span class = "tarea-texto">${tarea.texto}</span>
            <button class = "btn-eliminar" data-id="${tarea.id}">Eliminar</button>
            `;
            listaTareas.appendChild(li);          
    });
    //Actualizar contador y agregar event listeners a los elementos creados
    actualizarContador();
    agregarEventListeners();
}

//Actualiza el contador de tareas

function actualizarContador(){
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length
    const pendientes = total - completadas;

    contador.innerHTML = `
        <strong>${total}</strong> tareas el total |
        <strong>${completadas}</strong> completadas |
        <strong>${pendientes}</strong> pendientes
        `;
}

//Agrega event listneer a los checboxes y botones de eliminar

function agregarEventListeners(){
    const checkboxes = document.querySelectorAll('.tarea-checkbox');
    checkboxes.forEach(checkbox =>{
        checkbox.addEventListener('change', (e) => {
            const id = parseFloat(e.target.dataset.id);
            toggleCompletada(id);
        });
    });

    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', (e) =>{
            const id = parseFloat(e.target.dataset.id);
            if(confirm('¿Seguro que quieres eliminar esta tarea?')){
                eliminarTarea(id);
            }
        });
    });
}

//Event listeners principales
btnAgregar.addEventListener('click', () =>{
    agregarTarea(inputTarea.value);
});

inputTarea.addEventListener('keypress', (e) =>{
    if (e.key === 'Enter') {
        agregarTarea(inputTarea.value);
    }
});

//Inicialización

function inicializar(){
    console.log('Iniciando aplicación...');
    tareas = cargarTareasDesdeStorage();
    renderizarTareas();
    inputTarea.focus();
    console.log('Aplicación inicializada');
}

inicializar();