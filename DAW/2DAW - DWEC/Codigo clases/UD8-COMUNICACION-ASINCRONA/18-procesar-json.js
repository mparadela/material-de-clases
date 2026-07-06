async function mostrarUsuarios() {
    try{
        console.log("Pidiendo usuarios...");
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const usuarios = await response.json();
        console.log(`${usuarios.length} usuarios recibidos`);

        let html = "<h2>Usuarios de la API</h2><ul>";

        usuarios.forEach(usuario => {
            html +=`
            <li>
                <strong>${usuario.name}</strong><br>
                Email: ${usuario.email}<br>
                Ciudad: ${usuario.address.city}
            <li>
            `;
        });
        
        html += "</ul>"

        document.getElementById('resultado').innerHTML = html;
        console.log("Usuarios mostrados en pantalla");

    } catch (error) {
        console.error("Error: ", error);
    }
    
}

mostrarUsuarios();

async function buscarPostsPorUsuario(usuarioId) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarioId}`);
        const posts = await response.json();

        console.log(`Posts del usuario ${usuarioId}:`);
        posts.forEach((post, index) => {
            console.log(`${index+1}. ${post.title}`);
        })
    } catch (error) {
        console.error("Error: ", error);
    }
    
}

buscarPostsPorUsuario(1);