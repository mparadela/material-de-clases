
// try {
//     // CÓDIGO QUE PUEDE FALLAR
// } catch (error){
//     // Código que se ejecuta SI falla
// } finally {
//     // Código que se ejecuta SIEMPRE
// }

function guardarDatos(){
    const mensajeDiv = document.getElementById('mensaje');

    try {
        console.log('Intentando guardar datos...');

        const usuario = {
            nombre: 'Maria',
            edad: 25,
            email: 'maria@ejemplo.com'
        }
 
        // usuario.yo = usuario;

        const usuarioJSON = JSON.stringify(usuario);
        localStorage.setItem('usuario', usuarioJSON);

        mensajeDiv.className = 'mensaje exito';
        mensajeDiv.textContent = 'Datos guardados correctamente';
        console.log('Datos guardados correctamente');
    
    } catch (error) {
        console.error('Error capturado', error);
        mensajeDiv.className = 'mensaje error';
        mensajeDiv.textContent = 'No se pudieron guardar los datos. Inténtalo de nuevo';
   
    } finally {
        console.log('Operación de guardaddo finalizada (éxito o error)');
    }

}