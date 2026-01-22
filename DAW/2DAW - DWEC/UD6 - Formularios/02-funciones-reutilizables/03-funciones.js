// ====================================
// EXPRESIONES REGULARES
// ====================================
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[679]\d{8}$/;

// ====================================
// FUNCIONES
// ====================================

function mostrarError(campo,mensaje){
    campo.classList.add('invalido');
    campo.classList.remove('valido');

    const errorDiv = campo.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('mensaje-error')){
        errorDiv.textContent = mensaje;
        errorDiv.classList.add('visible');
    }
}

function mostrarExito(campo){
    campo.classList.remove('invalido');
    campo.classList.add('valido');

    const errorDiv = campo.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('mensaje-error')){
        errorDiv.classList.remove('visible');
    }
}

function validarCampo(campo,regex,mensajeError){

    const valor = campo.value.trim();
    if (valor === ""){
        mostrarError(campo, 'Este campo es obligatorio');
        return false;
    }

    if (!regex.test(valor)){
        mostrarError(campo, mensajeError);
        return false;
    }

    mostrarExito(campo);
    return true;
}

// ====================================
// SELECCIÓN DE ELEMENTOS
// ====================================
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const btnSubmit = document.getElementById('btnSubmit');

// ====================================
// EVENT LISTENERS
// ====================================

emailInput.addEventListener('blur', ()=> {
    validarCampoConSubmit(
        emailInput,
        emailRegex,
        'Introduce un email válido (ejemplo: usuario@dominio.com)'
    );
});

telefonoInput.addEventListener('blur', () => {
    validarCampoConSubmit(
        telefonoInput,
        telefonoRegex,
        'Teléfono: 9 dígitos, empieza por 6, 7 o 9'
    )
})

function verificarFormularioCompleto(){
    const inputs = document.querySelectorAll('#formulario input[type="text"]');

    const todosValidos = Array.from(inputs).every(input =>
        input.classList.contains('valido')
    );

    btnSubmit.disabled = !todosValidos;
}

function validarCampoConSubmit(campo, regex, mensajeError){
    validarCampo(campo, regex,mensajeError);
    verificarFormularioCompleto();
}


// ====================================
// PREVENIR ENVÍO
// ====================================
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario válido!');
});

verificarFormularioCompleto();