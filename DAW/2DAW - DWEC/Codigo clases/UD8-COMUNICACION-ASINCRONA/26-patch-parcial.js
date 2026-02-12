console.log("=== PATCH: ACTUALIZACIÓN PARCIAL ===\n");

// PATCH: Solo envío lo que cambió
async function actualizarTitulo(id, nuevoTitulo) {
    try {
        console.log(`Actualizando solo el título del post ${id}`);
        
        // Solo envío el campo que cambió
        const cambios = {
            title: nuevoTitulo
        };
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cambios)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const resultado = await response.json();
        console.log("Título actualizado:", resultado);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

actualizarTitulo(1, "Solo cambio el título");

console.log("\n=== EJEMPLOS PRÁCTICOS DE PATCH ===\n");

// Ejemplo 1: Toggle de completado
async function marcarComoCompletado(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completado: true })
    });
    const data = await response.json();
    console.log("Marcado como completado:", data);
}

// Ejemplo 2: Incrementar likes
async function darLike(id) {
    // Primero obtener likes actuales
    const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response1.json();
    
    // Incrementar
    const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ likes: (post.likes || 0) + 1 })
    });
    const resultado = await response2.json();
    console.log("Like añadido:", resultado);
}

marcarComoCompletado(1);
darLike(1);
