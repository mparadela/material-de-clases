console.log("=== PANEL CRUD COMPLETO ===\n");

const resultado = document.getElementById('resultado');

// ========================================
// CREATE (POST)
// ========================================
document.getElementById('btn-crear').addEventListener('click', async () => {
    try {
        resultado.innerHTML = "🔄 Creando post...";
        
        const nuevoPost = {
            title: "Post creado desde el panel",
            body: "Este es un post de prueba",
            userId: 1
        };
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoPost)
        });
        
        const data = await response.json();
        
        resultado.innerHTML = `
            <div class="exito">
                POST creado (id: ${data.id})
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        `;
        
    } catch (error) {
        resultado.innerHTML = `<div class="error">${error.message}</div>`;
    }
});

// ========================================
// READ (GET)
// ========================================
document.getElementById('btn-listar').addEventListener('click', async () => {
    try {
        resultado.innerHTML = "🔄 Cargando posts...";
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();
        
        let html = '<h2>Primeros 5 posts:</h2><ul>';
        posts.forEach(post => {
            html += `<li><strong>${post.title}</strong></li>`;
        });
        html += '</ul>';
        
        resultado.innerHTML = html;
        
    } catch (error) {
        resultado.innerHTML = `<div class="error">${error.message}</div>`;
    }
});

// ========================================
// UPDATE (PUT)
// ========================================
document.getElementById('btn-actualizar').addEventListener('click', async () => {
    try {
        resultado.innerHTML = "🔄 Actualizando post 1...";
        
        const postActualizado = {
            id: 1,
            title: "Post ACTUALIZADO desde el panel",
            body: "Contenido actualizado",
            userId: 1
        };
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postActualizado)
        });
        
        const data = await response.json();
        
        resultado.innerHTML = `
            <div class="exito">
                POST actualizado
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        `;
        
    } catch (error) {
        resultado.innerHTML = `<div class="error">${error.message}</div>`;
    }
});

// ========================================
// DELETE
// ========================================
document.getElementById('btn-eliminar').addEventListener('click', async () => {
    try {
        resultado.innerHTML = "🔄 Eliminando post 1...";
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        });
        
        if (response.ok) {
            resultado.innerHTML = `
                <div class="exito">
                    POST eliminado correctamente
                    <p>Status: ${response.status}</p>
                </div>
            `;
        }
        
    } catch (error) {
        resultado.innerHTML = `<div class="error">${error.message}</div>`;
    }
});

console.log("Panel listo. Haz clic en los botones para probar CRUD.");