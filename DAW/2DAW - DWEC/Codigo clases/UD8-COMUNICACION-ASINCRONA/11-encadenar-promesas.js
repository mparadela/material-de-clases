function obtenerUsuario (id) {
    console.log("1. Obteniendo usuario...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: id, nombre: "Ana"});
        }, 1000);
    });
}

function obtenerPosts(usuarioId) {
    console.log("2. Obteniendo posts... ");
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve([
                {id: 1, titulo: "Post 1"},
                {id: 2, titulo: "Post 2"}
            ]);
        }, 1000);
    })
}

function obtenerComentarios(postId) {
    console.log("3. Obteniendo comentarios...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { texto: "Comentario 1" },
                { texto: "Comentario 2" }
            ]);
        }, 1000);
    });
}

obtenerUsuario(1)
    .then((usuario) =>{
        console.log("Usuario: ", usuario.nombre);
        return obtenerPosts(usuario.id);
    })

    .then((posts) =>{
        console.log("Posts: ", posts.length);
        return obtenerComentarios(posts[0].id);
    })

    .then((comentarios) =>{
        console.log("Comentarios: ", comentarios.length);
        console.log("todo hecho");
    })

    .catch((error) => {
        console.log("Error en alguna oparacion", error);
    })
