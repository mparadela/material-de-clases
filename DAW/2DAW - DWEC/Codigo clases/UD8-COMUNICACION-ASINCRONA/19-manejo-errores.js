// async function probarCodigos() {

//     const url = 'https://jsonplaceholder.typicode.com/posts/99999999';

//     const response = await fetch(url);
//     console.log("Status code: ", response.status);
//     console.log("Status text: ", response.statusText);
//     console.log("¿ok?", response.ok);
    
// }

// probarCodigos();

// async function obtenerPostSeguro(id) {
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//         if (!response.ok){
//             throw new Error(`Error HTTP: ${response.status}`);
//         }

//         const post = await response.json();
//         console.log("post obtenido: ", post.title);
//         return post;
//     } catch (error) {
//         console.error("Error al obtener el post", error.message);
//         return null;
//     }
    
// }

// obtenerPostSeguro(1);
// obtenerPostSeguro(9999999);

async function obtenerConReintentos(url, intentos = 3) {
    for (let i = 0; i < intentos, i++ {
        try {
            console.log
        }
    })
}