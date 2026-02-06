// function obtenerDatos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Datos del servidor");
//         }, 1000);
//     });
// }

// console.log("Con .then():");
// obtenerDatos()
//     .then((datos) => {
//         console.log("datos recibidos: ", datos);
//     });

// async function cargarDatos() {
//     const datos = await obtenerDatos();
//     console.log("Datos recibidos: ", datos);
    
// }

// cargarDatos()

// async function saludar() {
//     return "Hola mundo";
// };

// console.log("Llamando a saludar():");
// const resultado = saludar();
// console.log("¿Qué devuelve? ", resultado);

// saludar().then((mensaje) => {
//     console.log("Mensaje: ", mensaje);
// })

// function esperar(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function procesarDatos() {
//     console.log("1. Inicio del proceso");

//     await esperar(1000);
//     console.log("2. Ha pasado 1 segundo");

//     await esperar(1000);
//     console.log("3. Ha pasado otro segundo");
    
//     await esperar(1000);
//     console.log("3. Ha pasado otro segundo");
    
//     await esperar(1000);
//     console.log("4. Proceso completado");   
// };

// procesarDatos();

// console.log("5. Este mensaje aparece inmediatamente");

function obtenerUsuario(id) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ({id: id, nombre: "Ana García"});
        }, 1000);
    });
};

function obtenerPosts(usuarioId) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve ([
                { id: 1, titulo: "Mi primer post" },
                { id: 2, titulo: "Segundo post" }
            ]);
        }, 1000);
    });
};

async function cargarDatosCompletos() {
    console.log("Cargando usuario...");
    const usuario = await obtenerUsuario(1);
    console.log("Usuario: ", usuario.nombre);
    
    console.log("Cargando posts...");
    const posts = await obtenerPosts(usuario.id);
    console.log("Posts: ", posts.length);

    console.log("Todo cargado");
    return {usuario, posts};
}

cargarDatosCompletos();