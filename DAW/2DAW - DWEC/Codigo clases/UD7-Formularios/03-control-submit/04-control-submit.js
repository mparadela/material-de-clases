// ====================================
// EXPRESIONES REGULARES
// ====================================
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telefonoRegex = /^[679]\d{8}$/;

// ====================================
// FUNCIONES YA CREADAS
// ====================================
function mostrarError(campo, mensaje) {
    campo.classList.add('invalido');
    campo.classList.remove('valido');
    
    const errorDiv = campo.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('mensaje-error')) {
        errorDiv.textContent = mensaje;
        errorDiv.classList.add('visible');
    }
}

function mostrarExito(campo) {
    campo.classList.remove('invalido');
    campo.classList.add('valido');
    
    const errorDiv = campo.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('mensaje-error')) {
        errorDiv.classList.remove('visible');
    }
}

function validarCampo(campo, regex, mensajeError) {
    const valor = campo.value.trim();
    
    if (valor === '') {
        mostrarError(campo, 'Este campo es obligatorio');
        return false;
    }
    
    if (!regex.test(valor)) {
        mostrarError(campo, mensajeError);
        return false;
    }
    
    mostrarExito(campo);
    return true;
}

// ====================================
// NUEVAS FUNCIONES
// ====================================



// ====================================
// SELECCIÓN DE ELEMENTOS
// ====================================
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const btnSubmit = document.getElementById('btnSubmit');

// ====================================
// EVENT LISTENERS
// ====================================



// ====================================
// INICIALIZACIÓN
// ====================================



// Prevenir envío
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario válido!');
});

