// Guardamos la referencia al div de resultados
const resultado = document.getElementById('resultado');

//SETITEM - Guardar los datos
document.getElementById('btnGuardar').addEventListener('click', () => {
    //localStorage.setItem(clave, valor)
    //Importante: ambos tienen que ser Strings
    localStorage.setItem('usuario', 'Ana García');
    localStorage.setItem('edad', '25');
    localStorage.setItem('ciudad', 'Zaragoza');

    resultado.innerHTML = '<p> Datos guardados correctamente </p>';

});

//GETITEM - Leer datos
document.getElementById('btnLeer').addEventListener('click', () =>{
    //localStorage.getItem(clave) devuelve el valor o null
    const usuario = localStorage.getItem('usuario');
    const edad = localStorage.getItem('edad');
    const ciudad = localStorage.getItem('ciudad');

    //Comprobamos si existen datos
    if (usuario) {
        resultado.innerHTML =`
        <p><strong>Usuario:</strong> ${usuario}</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Ciudad:</strong> ${ciudad}</p>
        `;
    } else {
        resultado.innerHTML = '<p>No hay datos guardados';
    }
});

//REMOVEITEM - Eliminar un dato específico
document.getElementById('btnEliminar').addEventListener('click', () => {
    //Eliminamos solo la clave 'edad'
    localStorage.removeItem('edad');

    resultado.innerHTML = '<p>Edad eliminada (pero usuario y ciudad siguen guradados)</p>';
});

//CLEAR - Eliminar TODO en localStorage
document.getElementById('btnLimpiar').addEventListener('click', () => {
    //CUIDADO: esto borra TODAS las claves de localStorage
    localStorage.clear();
    resultado.innerHTML = '<p>Todo el localStorage ha sido limpiado</p>';
});