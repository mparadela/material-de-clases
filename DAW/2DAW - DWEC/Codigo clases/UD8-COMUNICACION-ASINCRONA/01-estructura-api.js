console.log("==ESTRUCTURA DE RESPUESTAS DE API===");

// EJEMPLO 1: Un solo objeto

const usuario = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

document.getElementById('ejemplo1').textContent = JSON.stringify(usuario, null, 2);

console.log("Estructura 1 - Objeto único:");
console.log("Tipo", typeof usuario);
console.log("Acceso:", "nombre de usuario -->", usuario.name);
console.log("Acceso anidado", "ciudad-->", usuario.address.city);

const posts = [
      {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  }
];

document.getElementById('ejemplo2').textContent = JSON.stringify(posts, null, 2);

console.log("Estructura 2 - Array de objetos:");
console.log("Tipo", Array.isArray(posts) ? "Array": typeof posts);
console.log("Cantidad:", posts.length, " elementos");
console.log("Primer elemento", posts[0].title);
console.log("Recorrer el array posts.forEach(post =>...=");

//EJEMPLO 3: Respuesta con metadatos

const respuestaCompleta = {
    "success": true,
    "message": "Datos obtenidos correctamente",
    "timestamp": new(Date),
    "data": {
        "currentPage": 1,
        "totalPages": 10,
        "itemsPerPage": 20,
        "totalItems": 200,
        "results": [
            {"id": 1, "name": "Producto 1", "price": 99.99},
            {"id": 2, "name": "Producto 2", "price": 149.99}
        ]
    }
}

document.getElementById('ejemplo3').textContent = JSON.stringify(respuestaCompleta, null, 2);

console.log("📌 Estructura 3 - Con metadatos:");
console.log("Estado:", respuestaCompleta.success);
console.log("Mensaje:", respuestaCompleta.message);
console.log("Página actual:", respuestaCompleta.data.currentPage);
console.log("Total páginas:", respuestaCompleta.data.totalPages);
console.log("Acceso a datos:", "respuesta.data.results");
console.log("Primer resultado:", respuestaCompleta.data.results[0].name);
