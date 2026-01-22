const formulario = document.getElementById('formulario');
const info = document.getElementById('info');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const ciudad = document.getElementById('ciudad');

function mostrarInfo(mensaje) {
    info.innerHTML = `<strong>Evento: </strong> <p>${mensaje}</p>`;
    console.log(mensaje);
}

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     mostrarInfo('🚀 SUBMIT: Formulario interceptado (NO se recarga)');

//     console.log('--- VALORES DEL FORMULARIO---');
//     console.log('Nombre:', nombre.value);
//     console.log('Email:', email.value);
//     console.log('Edad:', edad.value);
//     console.log('Ciudad:', ciudad.value);
// });

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const resultado = validarFormulario();

    if (!resultado.valido){
        console.error('ERRORES DE VALIDACIÓN');
        resultado.errores.forEach(error => {
            console.error(' -', error)
        });

        const mensajeErrores = resultado.errores.join('<br>');
        info.innerHTML = `<strong>Errores:</strong><p>${mensajeErrores}</p>`;
        info.style.color = 'red';
    } else {
        console.log('FORMULARIO VALIDO');

        const datosUsuario = {
            nombre: nombre.value.trim(),
            email: email.value.trim().toLowerCase(),
            edad: parseInt(edad.value),
            ciudad: ciudad.value,
            fechaRegistro: new Date().toISOString()
        };

        console.log('Datos del usuario;', datosUsuario)

        info.innerHTML = `<strong>Formulario válido</strong><p>Ususario registrado correctamente</p>`;
        info.style.color = 'green';

        formulario.reset();
    }
})

nombre.addEventListener('input', (e) =>{
    const valor = e.target.value;
    const longitud = valor.length;

    mostrarInfo(`INPUT en nombre: "${valor}" (${longitud} caracteres)`);

    const contador = document.getElementById('nombre-count');
    contador.textContent = `${longitud} caracteres`;

    if (longitud === 0){
        nombre.classList.remove('valid', 'invalid');
    } else if (longitud < 3){
        nombre.classList.remove('valid');
        nombre.classList.add('invalid');
    } else {
        nombre.classList.remove('invalid');
        nombre.classList.add('valid');
    }
});

email.addEventListener('change', (e) =>{
    const valor = e.target.value;
    mostrarInfo(`CHANGE en email: "${valor}"`);
    
    if (valor.includes('@')) {
        console.log('Email tiene @');
    } else {
        console.log('Email NO tiene @');
    }
})

edad.addEventListener('blur', (e) => {
    const valor = e.target.value;
    mostrarInfo(`BLUR en edad: "${valor}"`);
    
    const edadNum = parseInt(valor);
    if (edadNum < 18) {
        console.log('Menor de edad');
    } else if (edadNum > 120) {
        console.log('Edad no valida');
    } else {
        console.log('Edad valida');
    }
})

ciudad.addEventListener('focus', (e) => {
    mostrarInfo(`FOCUS en ciudad`);
})

function validarFormulario() {

    const errores = [];

    const nombreValor = nombre.value.trim();

    if (nombreValor === ''){
        errores.push('El nombre es obligatorio');
    } else if (nombreValor.length < 3){
        errores.push('El nombre debe tener al menos tres caracteres');
    };

    const emailValor = email.value.trim();

    if (emailValor === '') {
        errores.push('El email es obligatorio');
    } else if (!emailValor.includes('@')) {
        errores.push('El email debe contener @');
    };

    const edadValor = parseInt(edad.value);

    if (isNaN(edadValor)) {
        errores.push('La edad debe ser un número');
    } else if (edadValor<18) {
        errores.push('Debes ser mayor de 18 años para enviar el formulario');
    } else if (edadValor > 120) {
        errores.push('La edad debe ser inferior a 120 años');
    }

    if (ciudad.value === '') {
        errores.push('Debes seleccionar una ciudad');
    }

    return {
        valido: errores.length === 0,
        errores: errores
    };
}