console.log("=== PUT: ACTUALIZAR COMPLETO ===\n");

// Primero obtenemos el post original
async function obtenerPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();
    console.log("Post original:", post);
    return post;
}

// Luego lo actualizamos con PUT
async function actualizarPost(id) {
    try {
        // 1. Obtener post actual
        const postOriginal = await obtenerPost(id);
        
        // 2. Modificar los campos que queremos cambiar
        const postActualizado = {
            ...postOriginal,  //Usamos spread operator .para copiar todos los campos y sobreescribimos los que queremos cambiar
            title: "Título ACTUALIZADO",
            body: "Contenido ACTUALIZADO"
        };
        
        console.log("\nPost actualizado:", postActualizado);
        
        // 3. Enviar con PUT
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postActualizado)
        });
        
        // 4. Verificar
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const resultado = await response.json();
        console.log("Post actualizado en servidor:", resultado);
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// Actualizar post con id 1
actualizarPost(1);

