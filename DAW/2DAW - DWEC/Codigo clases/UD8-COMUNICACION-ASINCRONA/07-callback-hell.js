function obtenerUsuario(id, callback) {
    console.log("1. Obteniendo usuario...");
    setTimeout(() => {
        callback({id: id, nombre: "Ana"})
    }, 1000);
}

function obtenerPosts(usuarioId, callback){
    console.log("2. Obteniendo los posts del usuario");
    setTimeout(() => {
        callback([
            {id: 1, titulo: "Post 1"},
            {id: 2, titulo: "post 2"}
        ]);
    }, 1000);
}

function obtenerComentarios (postId, callback){
    console.log("3. Obteniendo comentarios del post...");
    setTimeout(()=> {
        callback([
            {texto: "Comentario 1"},
            {texto: "Comentario 2"}
        ]);
    },1000)
}

obtenerUsuario(1, (usuario) => {
    console.log("Usuario obtenido", usuario.nombre);

    obtenerPosts(usuario.id, (posts) =>{
        console.log("Posts obtenidos: ", posts.length);

        obtenerComentarios(posts[0].id, (comentarios) => {
            console.log("Comentario obtenidos: ", comentarios.length);

            console.log("usuario: ", usuario.nombre);
            console.log("primer post: ", posts[0].titulo);
            console.log("Comentarios: ", comentarios);
        });
    });
});