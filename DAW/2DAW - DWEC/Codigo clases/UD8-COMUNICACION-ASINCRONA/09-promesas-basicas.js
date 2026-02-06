// const miPromesa = new Promise((resolve, reject) => {
//     console.log("Promesa en ejecución...");

//     setTimeout(() => {
//         const exito = true;
//         if (exito) {
//             resolve("Operacion exitosa");
//         } else {
//             reject("Algo salio mal");
//         }
//     }, 2000);
// });

// console.log("promesa creada, estado pending")
// console.log(miPromesa);

// const otraPromesa = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("datos obtenidos correctamente")
//     }, 1000);
// });

// otraPromesa.then((resultado) => {
//     console.log("Exito", resultado);
// });

// console.log("código que sigue ejecutándose... ")

function obtenerUsuario (id){
    console.log(`Pidiendo usuario ${id}`);

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
        const usuario = {
        id: id,
        nombre: "Ana Garcia",
        email: "ana@ejemplo.com"
    };
    console.log("servidor respondió");
    resolve(usuario);
    }, 2000);
});
}

console.log("inicio");

obtenerUsuario(1).then((usuario) => {
    console.log("Usuario recibido:", usuario.nombre);
    console.log("Email", usuario.email);
});

console.log("mientras espero ejecuto cosas")
