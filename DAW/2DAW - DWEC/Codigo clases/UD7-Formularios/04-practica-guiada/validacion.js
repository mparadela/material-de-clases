// ====================================
// EXPRESIONES REGULARES
// ====================================

// TODO: Define las RegExp necesarias
const nombreRegex = // COMPLETAR (3-50 letras, espacios permitidos)
const emailRegex = // COMPLETAR
const telefonoRegex = // COMPLETAR (9 dígitos, empieza por 6, 7 o 9)
const dniRegex = // COMPLETAR (8 números + 1 letra mayúscula)

// ====================================
// FUNCIONES DE VALIDACIÓN
// ====================================

/**
 * Muestra un mensaje de error en un campo
 * @param {HTMLElement} campo - El input que tiene el error
 * @param {string} mensaje - El mensaje a mostrar
 */
function mostrarError(campo, mensaje) {
    // TODO: Implementar
    // 1. Añadir clase 'invalido' al campo
    // 2. Quitar clase 'valido' del campo
    // 3. Buscar el div de error (nextElementSibling)
    // 4. Poner el texto del mensaje
    // 5. Añadir clase 'visible' al div de error
}

/**
 * Marca un campo como válido
 * @param {HTMLElement} campo - El input que es válido
 */
function mostrarExito(campo) {
    // TODO: Implementar
    // 1. Quitar clase 'invalido' del campo
    // 2. Añadir clase 'valido' al campo
    // 3. Buscar el div de error
    // 4. Quitar clase 'visible' del div de error
}

/**
 * Valida un campo según su RegExp
 * @param {HTMLElement} campo - El input a validar
 * @param {RegExp} regex - La expresión regular para validar
 * @param {string} mensajeError - Mensaje si no cumple el patrón
 * @returns {boolean} - true si es válido, false si no
 */
function validarCampo(campo, regex, mensajeError) {
    // TODO: Implementar
    // 1. Obtener el valor del campo con .trim()
    // 2. Si está vacío, mostrar error "Este campo es obligatorio" y return false
    // 3. Si no pasa el test de la regex, mostrar el mensajeError y return false
    // 4. Si todo OK, mostrar éxito y return true
}

/**
 * Verifica si todos los campos son válidos y habilita/deshabilita el submit
 */
function verificarFormularioCompleto() {
    // TODO: Implementar
    // 1. Seleccionar todos los inputs del formulario
    // 2. Usar .every() para comprobar si TODOS tienen clase 'valido'
    // 3. Habilitar/deshabilitar btnSubmit según el resultado
}

/**
 * Valida un campo y actualiza el estado del submit
 */
function validarCampoConSubmit(campo, regex, mensajeError) {
    // TODO: Implementar
    // 1. Llamar a validarCampo()
    // 2. Llamar a verificarFormularioCompleto()
}

// ====================================
// SELECCIÓN DE ELEMENTOS
// ====================================

const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');
const dniInput = document.getElementById('dni');
const btnSubmit = document.getElementById('btnSubmit');

// ====================================
// EVENT LISTENERS
// ====================================

// TODO: Añadir event listener 'blur' para cada campo
// Usa validarCampoConSubmit() con sus parámetros correspondientes


// ====================================
// INICIALIZACIÓN
// ====================================

// TODO: Llamar a verificarFormularioCompleto() al cargar la página


// Prevenir envío del formulario (ya implementado)
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('¡Formulario válido!');
    alert('Registro completado correctamente');
});

