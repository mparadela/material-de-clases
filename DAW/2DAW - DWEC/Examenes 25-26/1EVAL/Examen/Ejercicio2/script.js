// Referencias al DOM
const inputNumeros = document.getElementById('inputNumeros');
const btnCalcular = document.getElementById('btnCalcular');
const resultados = document.getElementById('resultados');

// Evento del botón
btnCalcular.addEventListener('click', calcularEstadisticas);

/**
 * Función principal que calcula todas las estadísticas
 */
function calcularEstadisticas() {
    // Obtener el texto del textarea
    const texto = inputNumeros.value.trim();
    
    // Validar que no esté vacío
    if (texto === '') {
        mostrarError('Por favor, introduce algunos números.');
        return;
    }
    
    // Convertir el texto a array de números
    const numeros = procesarEntrada(texto);
    
    // Si hay error en la conversión, mostrar mensaje
    if (numeros === null) {
        mostrarError('Error: Asegúrate de introducir solo números separados por comas.');
        return;
    }
    
    // Si el array está vacío
    if (numeros.length === 0) {
        mostrarError('No se detectaron números válidos.');
        return;
    }
    
    // Calcular todas las estadísticas
    const cantidad = numeros.length;
    const media = calcularMedia(numeros);
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);
    const pares = obtenerPares(numeros);
    const mayoresQueMedia = numeros.filter(num => num > media);
    
    // Mostrar resultados
    mostrarResultados({
        numeros,
        cantidad,
        media,
        mayor,
        menor,
        pares,
        mayoresQueMedia
    });
}

/**
 * Procesa la entrada del usuario y devuelve un array de números
 * Retorna null si hay errores de conversión
 */
function procesarEntrada(texto) {
    try {
        // Dividir por comas
        const partes = texto.split(',');
        
        // Convertir cada parte a número
        const numeros = partes.map(parte => {
            const numero = parseFloat(parte.trim());
            
            // Si no es un número válido, lanzar error
            if (isNaN(numero)) {
                throw new Error('No es un número válido');
            }
            
            return numero;
        });
        
        return numeros;
        
    } catch (error) {
        return null;
    }
}

/**
 * Calcula la media de un array de números usando reduce
 */
function calcularMedia(numeros) {
    const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
    return suma / numeros.length;
}

/**
 * Filtra y devuelve solo los números pares
 */
function obtenerPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}

/**
 * Muestra los resultados en el DOM
 */
function mostrarResultados(stats) {
    // Formatear los arrays para mostrarlos
    const paresTexto = stats.pares.length > 0 
        ? stats.pares.join(', ') 
        : 'No hay números pares';
    
    const mayoresTexto = stats.mayoresQueMedia.length > 0 
        ? stats.mayoresQueMedia.join(', ') 
        : 'Ninguno';
    
    // Crear el HTML con los resultados
    resultados.innerHTML = `
        <h2>Estadísticas:</h2>
        <p><strong>Números analizados:</strong> ${stats.numeros.join(', ')}</p>
        <p><strong>Cantidad de números:</strong> ${stats.cantidad}</p>
        <p><strong>Media:</strong> ${stats.media.toFixed(2)}</p>
        <p><strong>Mayor valor:</strong> ${stats.mayor}</p>
        <p><strong>Menor valor:</strong> ${stats.menor}</p>
        <p><strong>Números pares:</strong> ${paresTexto}</p>
        <p><strong>Números mayores que la media:</strong> ${mayoresTexto}</p>
    `;
    
    // Quitar la clase de error si existía
    resultados.classList.remove('error');
}

/**
 * Muestra un mensaje de error
 */
function mostrarError(mensaje) {
    resultados.innerHTML = `<p>${mensaje}</p>`;
    resultados.classList.add('error');
}
