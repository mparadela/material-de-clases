console.log("=== ESTRUCTURA DE RESPUESTAS DE API ===\n");

//EJEMPLO 1 - un solo objeto (GET /users/1)

const usuario = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
    },
    "phone": "1-770-736-8031",
    "website": "hildegard.org"
};

document.getElementById('ejemplo1').textContent = JSON.stringify(usuario, null,2);

console.log("Estructura 1 - Objeto único");
console.log("Tipo:", typeof usuario);
console.log("Acceso:", "usuario.name -->", usuario.name);
console.log("Acceso anidado:", "usuario.address.city --> ", usuario.address.city);
console.log("");

// EJEMPLO 2: Array de objetos (GET /posts)

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat",
        "body": "quia et suscipit..."
    },
    {
        "userid": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae"
    },
    {
        "userid": 2,
        "id": 3,
        "title": "esa molestias quasi",
        "body": "et iusto sed quo iure..."
    }
];

document.getElementById('ejemplo2').textContent = JSON.stringify(posts, null, 2);

console.log("Estructura 2 - Array de objetos");
console.log("Tipo:", Array.isArray(posts) ? "Array": typeof posts);
console.log("Cantidad:", posts.length, "elementos");
console.log("Primer elemento:", posts[0].title);
console.log("Recorrer", "posts.forEach(post => ...)");
console.log("");

//EJEMPLO 3: Respuesta con metadatos

const respuestaCompleta = {
    "success": true,
    "message": "Datos obtenidos correctamente",
    "timestamp": new Date,
    "data":{
        "Current Page": 1,
        "totalPages": 10,
        "itemsPerPage": 20,
        "totalItems": 200,
        "results": [
            {"id": 1, "name": "Producto 1", "price": 99.99},
            {"id": 2, "name": "Producto 2", "price": 149.99}
        ]
    }
};

document.getElementById('ejemplo3').textContent = JSON.stringify(respuestaCompleta, null, 2);

console.log("Estructura 3 - Con metadatos:");
console.log("Estado: ", respuestaCompleta.success);
console.log("Mensaje: ", respuestaCompleta.message);
console.log("Pagina actual: ", respuestaCompleta.data.currentPage);
console.log("Total páginas: ", respuestaCompleta.data.totalPages);
console.log("Acceso a datos: ", "respuesta.data.results");
console.log("Primer resultado: ", respuestaCompleta.data.results[0].name);