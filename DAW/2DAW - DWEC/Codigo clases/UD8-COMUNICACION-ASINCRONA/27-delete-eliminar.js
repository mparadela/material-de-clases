console.log("=== DELETE: ELIMINAR RECURSO ===\n");

async function eliminarPost(id) {
    try {
        console.log(`Eliminando post ${id}...`);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        
        // DELETE suele responder con 204 No Content o 200 OK
        if (response.status === 204) {
            console.log("Post eliminado (204 No Content)");
        } else if (response.ok) {
            const data = await response.json();
            console.log("Post eliminado:", data);
        } else {
            throw new Error(`HTTP ${response.status}`);
        }
        
    } catch (error) {
        console.error("Error al eliminar:", error.message);
    }
}

eliminarPost(1)

console.log("\n=== DELETE CON CONFIRMACIÓN ===\n");

async function eliminarConConfirmacion(id) {
    try {
        // 1. Obtener datos del post para mostrarlos
        const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response1.json();
        
        console.log(`¿Seguro que quieres eliminar "${post.title}"?`);
        
        // 2. En la vida real, aquí habría un confirm() o modal
        const confirmado = true; // Simulo confirmación
        
        if (!confirmado) {
            console.log("Cancelado por el usuario");
            return;
        }
        
        // 3. Eliminar
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        
        if (response2.ok) {
            console.log("Post eliminado correctamente");
            console.log("Redirigir a lista de posts...");
        }
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

eliminarConConfirmacion(1);
