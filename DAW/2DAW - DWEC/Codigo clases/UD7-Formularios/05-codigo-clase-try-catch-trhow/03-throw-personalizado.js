function calcularPrecioConDescuento (precioOriginal, porcentajeDescuento){
    if (isNaN(porcentajeDescuento)){
        throw new Error('El descuento debe ser un número');
    }
    if (porcentajeDescuento <0) {
        throw new Error('El descuento no puede ser negativo');
    }

    if (porcentajeDescuento > 100) {
        throw new Error('El descuento no puede ser mayor del 100%');
    }

    const descuento = precioOriginal *(porcentajeDescuento /100);
    const precioFinal = precioOriginal - descuento;

    return precioFinal;
}

function aplicarDescuento() {
    const resultadoDiv = document.getElementById('resultado');
    const descuentoInput = document.getElementById('descuento');
    const precioOriginal = 100;

    try {
        const descuentoValor = parseFloat(descuentoInput.value);
        const precioFinal = calcularPrecioConDescuento(precioOriginal, descuentoValor);
        resultadoDiv.className = 'resultado exito';
        resultadoDiv.innerHTML = `
            <strong>Cálculo correcto:</strong><br>
            Precio original: ${precioOriginal} €<br>
            Descuento: ${descuentoValor} €<br>
            Precio fiinal: ${precioFinal.toFixed(2)} €`;
    
        } catch (error) {
            resultadoDiv.className = 'resultado error';
            resultadoDiv.innerHTML = `
                <strong>Error:</strong><br>
                ${error.message}`;
        }

}