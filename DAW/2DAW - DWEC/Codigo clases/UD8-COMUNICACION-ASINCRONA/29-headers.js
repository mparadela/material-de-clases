// Voy a hacer una petición GET con headers personalizados
async function peticionConHeaders() {
    console.log("=== Petición con headers ===");
    
    // Creo un objeto con los headers que quiero enviar
    const headers = {
        'Content-Type': 'application/json', // Le digo que envío JSON
        'Accept': 'application/json',        // Le digo que quiero JSON de vuelta
        'User-Agent': 'MiApp/1.0',          // Identifico mi aplicación
        'X-Custom-Header': 'valor-custom'   // Header personalizado
    };
    
    // Hago la petición incluyendo los headers
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'GET',
        headers: headers
    });
    
    const data = await response.json();
    console.log("Datos recibidos:", data);
    
    // Ahora voy a ver los headers de RESPUESTA
    console.log("=== Headers de respuesta ===");
    
    // Para ver un header específico
    console.log("Content-Type:", response.headers.get('content-type'));
    
    // Para ver TODOS los headers (itero con forEach)
    response.headers.forEach((valor, nombre) => {
        console.log(`${nombre}: ${valor}`);
    });
}

// Llamo a la función
peticionConHeaders();
