/* Requisitos del js:
- Seleccionar elementos del dom ✔️
- Array para guardar los gastos ✔️
- validar los gastos
    - no vacio
    - min 3 caracteres
    - cantidad > 0
- Formato para mostrar: [Concepto] - [Importe] - [Categoría] - [Fecha] - botón para eliminar
- Resumen:
    - Función que sume todos los importes
    - Función que cuente el número de gastos
- Event listener
- localStorage

FUNCIONES QUE NECESITO:
- cargarGastos -- para cargar de localStorage ✔️
- guardarGastos -- para guardar en localStorage✔️
- validarInputs ✔️
- agregarGasto -- para añadir un gasto al array✔️
- mostrarGastos -- para enseñar en li ✔️ 
- eliminarGasto -- para poner en el botón del li
- actualizarResumen -- para que las estadísticas se actualicen dinámicamente ✔️

*/

const inputConcepto = document.getElementById("concepto");
const inputCantidad = document.getElementById("cantidad");
const inputCategoria = document.getElementById("categoria");
const btnAgregar = document.getElementById("btnAgregar");
const listaGastos = document.getElementById("listaGastos");
const spanTotalGastado = document.getElementById("totalGastado");
const spanNumeroGastos = document.getElementById("numeroGastos");

let gastos = [];

function cargarGastos() {
    const gastosGuardados = localStorage.getItem("gastos");
    if (gastosGuardados){
        gastos = JSON.parse(gastosGuardados);
        mostrarGastos();
    }
};

function guardarGastos() {
    localStorage.setItem("gastos", JSON.stringify(gastos));
};

function validarInputs() {
    const concepto = inputConcepto.value.trim();
    const cantidad = parseFloat(inputCantidad.value);

    if (concepto === "") {
        alert("El concepto no puede estar vacío");
        return false;
    }

    if (concepto.length < 3) {
        alert("El concepto debe tener mínimo tres caracteres");
        return false;
    }

    if (isNaN(cantidad) || cantidad <=0){
        alert("La cantidad debe ser un número >0");
        return false;
    }

    return true;
}

function obtenerFechaActual(){
    const fecha = new Date();
    const dia = String(fecha.getDate()).padStart(2,'0');
    const mes = String(fecha.getMonth()+1).padStart(2,'0');
    const anio = fecha.getFullYear();

    return `${dia}/${mes}/${anio}`;
}

function agregarGasto() {
    if (!validarInputs()){
        return;
    }
    const nuevoGasto = {
        id: Date.now(),
        concepto: inputConcepto.value.trim(),
        cantidad:  parseFloat(inputCantidad.value),
        categoria: inputCategoria.value.trim(),
        fecha: obtenerFechaActual()
    }

    gastos.push(nuevoGasto);
    inputConcepto.value = "";
    inputCantidad.value = "";
    inputCategoria.value = "";
    inputConcepto.focus();

    guardarGastos();
    mostrarGastos();
}

function mostrarGastos() {
    listaGastos.innerHTML = "";

    gastos.forEach(gasto => {
        const li = document.createElement("li");
        const infoGasto = document.createElement("span");
    
        infoGasto.textContent = `${gasto.concepto} - ${gasto.cantidad.toFixed(2)} € - ${gasto.categoria} - ${gasto.fecha}`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener ("click", () => {
            eliminarGasto(gasto.id);
        })

        li.appendChild(infoGasto);
        li.appendChild(btnEliminar);
        listaGastos.appendChild(li);
    });
    actualizarResumen();
}

function eliminarGasto(id) {
    gastos = gastos.filter (g => g.id != id);
    guardarGastos();
    mostrarGastos();
}

function actualizarResumen() {
    const totalGastado = gastos.reduce((sum, g) => sum + g.cantidad, 0);
    spanTotalGastado.textContent = totalGastado.toFixed(2);
    spanNumeroGastos.textContent = gastos.length;
}

btnAgregar.addEventListener("click", agregarGasto);
cargarGastos();