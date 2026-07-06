function validarEmail(email){
   
    if(email.trim()===""){
        throw new Error('El email es obligatorio');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
        throw new Error('El formato del email no es válido, debe ser como usuario@email.com');
    }

    return true;
}

function validarEdad(edad){
    if (edad.trim()=== ""){
       throw new Error('La edad es obligatoria'); 
    }

    const edadNum = parseInt(edad);

    if (isNaN(edadNum)){
        throw new Error('La edad debe ser un número entero');
    }

    if (edadNum < 18) {
        throw new Error('Debes ser mayor de 18 años para hacer el registro');
    }

    if (edadNum > 120) {
        throw new Error('Ni de coña tienes más de 120 años');
    }

    return true;
}

const formulario = document.getElementById('formulario');
const emailInput = document.getElementById('email');
const edadIniput = document.getElementById('edad');
const mensajeDiv = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    emailInput.classList.remove('valido', 'invalido');
    edadIniput.classList.remove('valido', 'invalido');
    mensajeDiv.innerHTML = "";

    const errores = [];

    try {
        validarEmail(emailInput.value);
        emailInput.classList.add('valido');
    } catch (error){
        emailInput.classList.add('invalido');
        errores.push(`Email: ${error.message}`);
    }

    try {
        validarEdad(edadIniput.value);
        edadIniput.classList.add('valido');
    } catch (error) {
        edadIniput.classList.add('invalido');
        errores.push(`Edad: ${error.message}`);
    }

    if (errores.length > 0){
        mensajeDiv.className = 'mensaje error';
        mensajeDiv.innerHTML = `
        <strong>Errores encontrados</strong><br>
        ${errores.map(e => `- ${e}`).join('<br>')}`
    }
    else {
        mensajeDiv.className = 'mensaje exito';
        mensajeDiv.innerHTML = `
         <strong>Formulario valido</strong><br>
         Los datos se han guardado correctamente`;

         console.log('Datos validos', {
            email:emailInput.value,
            edad:edadIniput.value
         })
    }
});