console.log("=== HEADERS EN FETCH ===");

async function crearUsuario() {
    const nuevoUsuario = {
        name: "Ana Garcia",
        email: "ana@ejemplo.com",
        username: "anagarcia"
    };

    console.log("Creando nuevo usuario ", nuevoUsuario);

    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)

    });

    console.log("Status: ", response.status);
    console.log("Headers de respuesta: ", response.headers.get('content-type'));
    
    const data = await response.json();
    console.log("Usuario creado ", data)
}

crearUsuario()