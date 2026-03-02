// ============================================
// EJERCICIO 1: SISTEMA DE GESTIÓN DE EMPLEADOS
// ============================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
const formulario = document.querySelector("#formulario-empleado");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const inputSalario = document.querySelector("#salario");
const selectDepartamento = document.querySelector("#departamento");
const listaEmpleados = document.querySelector("#lista-empleados");

const nombreError = document.querySelector("#nombre-error");
const emailError = document.querySelector("#email-error");
const salarioError = document.querySelector("#salario-error");
const departamentoError = document.querySelector("#departamento-error");

// 2. CLASE EMPLEADO
class Empleado {
    static contadorId = 1;

    constructor(nombre, email, salario, departamento) {
        this.id = Empleado.contadorId++;
        this.nombre = nombre;
        this.email = email;
        this.salario = salario;
        this.departamento = departamento;
    }

    mostrarInfo() {
        return `${this.nombre} - ${this.email} - ${this.salario}€ - ${this.departamento}`;
    }
}

// 3. CLASE PROGRAMADOR (HEREDA DE EMPLEADO)
class Programador extends Empleado {
    constructor(nombre, email, salario, departamento, lenguaje) {
        super(nombre, email, salario, departamento);
        this.lenguaje = lenguaje;
    }

    mostrarInfo() {
        return `${this.nombre} - ${this.email} - ${this.salario}€ - ${this.departamento} - ${this.lenguaje}`;
    }
}

// 4. CLASE GESTOR DE EMPLEADOS
class GestorEmpleados {
    constructor() {
        this.empleados = [];
    }

    static validarSalario(salario) {
        return salario > 0;
    }

    añadirEmpleado(empleado) {
        this.empleados.push(empleado);
    }

    eliminarEmpleado(id) {
        this.empleados = this.empleados.filter(emp => emp.id !== id);
    }

    obtenerEmpleados() {
        return this.empleados;
    }
}

// 5. INSTANCIA DEL GESTOR
const gestor = new GestorEmpleados();

// 6. FUNCIONES DE VALIDACIÓN
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    if (nombre.trim() === "") {
        mostrarError(inputNombre, nombreError, "El nombre es obligatorio");
        return false;
    }
    
    if (nombre.trim().length < 3) {
        mostrarError(inputNombre, nombreError, "El nombre debe tener al menos 3 caracteres");
        return false;
    }
    
    if (!regex.test(nombre)) {
        mostrarError(inputNombre, nombreError, "El nombre solo puede contener letras y espacios");
        return false;
    }
    
    mostrarValido(inputNombre, nombreError);
    return true;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.trim() === "") {
        mostrarError(inputEmail, emailError, "El email es obligatorio");
        return false;
    }
    
    if (!regex.test(email)) {
        mostrarError(inputEmail, emailError, "Email inválido");
        return false;
    }
    
    mostrarValido(inputEmail, emailError);
    return true;
}

function validarSalario(salario) {
    if (salario === "" || isNaN(salario)) {
        mostrarError(inputSalario, salarioError, "El salario es obligatorio");
        return false;
    }
    
    if (!GestorEmpleados.validarSalario(Number(salario))) {
        mostrarError(inputSalario, salarioError, "El salario debe ser mayor que 0");
        return false;
    }
    
    mostrarValido(inputSalario, salarioError);
    return true;
}

function validarDepartamento(departamento) {
    if (departamento === "") {
        mostrarError(selectDepartamento, departamentoError, "Debes seleccionar un departamento");
        return false;
    }
    
    mostrarValido(selectDepartamento, departamentoError);
    return true;
}

// 7. FUNCIONES DE FEEDBACK VISUAL
function mostrarError(input, spanError, mensaje) {
    input.classList.add("input-error");
    input.classList.remove("input-valido");
    spanError.textContent = mensaje;
    spanError.classList.add("mostrar");
}

function mostrarValido(input, spanError) {
    input.classList.remove("input-error");
    input.classList.add("input-valido");
    spanError.classList.remove("mostrar");
}

function limpiarErrores() {
    const inputs = [inputNombre, inputEmail, inputSalario, selectDepartamento];
    const errores = [nombreError, emailError, salarioError, departamentoError];
    
    inputs.forEach(input => {
        input.classList.remove("input-error", "input-valido");
    });
    
    errores.forEach(error => {
        error.classList.remove("mostrar");
    });
}

// 8. FUNCIÓN PRINCIPAL: AÑADIR EMPLEADO
function añadirEmpleado(e) {
    e.preventDefault();
    
    // Obtener valores
    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const salario = inputSalario.value;
    const departamento = selectDepartamento.value;
    
    // Validar todos los campos
    const nombreValido = validarNombre(nombre);
    const emailValido = validarEmail(email);
    const salarioValido = validarSalario(salario);
    const departamentoValido = validarDepartamento(departamento);
    
    // Si hay errores, no continuar
    if (!nombreValido || !emailValido || !salarioValido || !departamentoValido) {
        alert("Por favor, corrige los errores del formulario");
        return;
    }
    
    // Crear empleado o programador según departamento
    let empleado;
    if (departamento === "IT") {
        empleado = new Programador(nombre, email, Number(salario), departamento, "JavaScript");
    } else {
        empleado = new Empleado(nombre, email, Number(salario), departamento);
    }
    
    // Añadir al gestor
    gestor.añadirEmpleado(empleado);
    
    // Limpiar formulario
    formulario.reset();
    limpiarErrores();
    
    // Actualizar vista
    mostrarEmpleados();
}

// 9. FUNCIÓN: ELIMINAR EMPLEADO
function eliminarEmpleado(id) {
    gestor.eliminarEmpleado(id);
    mostrarEmpleados();
}

// 10. FUNCIÓN: MOSTRAR EMPLEADOS
function mostrarEmpleados() {
    // Limpiar contenedor
    listaEmpleados.innerHTML = "";
    
    // Obtener empleados
    const empleados = gestor.obtenerEmpleados();
    
    // Si no hay empleados
    if (empleados.length === 0) {
        listaEmpleados.innerHTML = '<p class="mensaje-vacio">No hay empleados registrados</p>';
        return;
    }
    
    // Crear card para cada empleado
    empleados.forEach(empleado => {
        const card = document.createElement("div");
        card.className = "empleado-card";
        
        const esProgramador = empleado instanceof Programador;
        
        card.innerHTML = `
            <div class="empleado-info">
                <h3>${empleado.nombre} 
                    <span class="empleado-badge ${esProgramador ? 'programador' : ''}">${empleado.departamento}</span>
                </h3>
                <p><strong>Email:</strong> ${empleado.email}</p>
                <p><strong>Salario:</strong> ${empleado.salario}€</p>
                ${esProgramador ? `<p><strong>Lenguaje:</strong> ${empleado.lenguaje}</p>` : ''}
            </div>
            <button class="btn-eliminar" onclick="eliminarEmpleado(${empleado.id})">Eliminar</button>
        `;
        
        listaEmpleados.appendChild(card);
    });
}

// 11. EVENT LISTENERS
formulario.addEventListener("submit", añadirEmpleado);

// Validación en tiempo real (opcional pero mejora UX)
inputNombre.addEventListener("blur", () => validarNombre(inputNombre.value));
inputEmail.addEventListener("blur", () => validarEmail(inputEmail.value));
inputSalario.addEventListener("blur", () => validarSalario(inputSalario.value));
selectDepartamento.addEventListener("change", () => validarDepartamento(selectDepartamento.value));

// 12. INICIALIZACIÓN
mostrarEmpleados();
