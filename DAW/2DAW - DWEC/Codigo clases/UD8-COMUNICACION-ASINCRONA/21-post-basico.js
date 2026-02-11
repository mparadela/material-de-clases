console.log("=== FETCH POST BASICO ===");

async function obtenerPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("GET: ", data);
    
}

obtenerPost();

console.log("---POST---");

async function crearPost() {
    const nuevoPost = {
        title: "Mi primer post", 
        body: "Este es el contenido de mi post",
        userId: 1
    };
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoPost)
    });

    const data = await response.json();
    console.log("POST CREADO: ", data);
}

crearPost();

/*

application/json <-- JSON
application/x-www-form-urlecoded <-- Formulario
multipart/form-data <-- Archivos

Authorization: tokens*/

