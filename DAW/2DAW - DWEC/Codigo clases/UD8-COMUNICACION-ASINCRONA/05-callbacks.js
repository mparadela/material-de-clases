// const numeros = [1,2,3,4,5];

// numeros.forEach(function(numero){
//     console.log("Número", numero);
// });

// function hacerAlgoTarde(callback) {
//     console.log("Iniciando tarea que tarda 1 segundo...");

//     setTimeout(() =>{
//         console.log("Tarea completada");
//         callback();
//     }, 1000);
// };

// hacerAlgoTarde(function(){
//     console.log("Este es mi callback, se ejecuta cuando termina la tarea");
// })

// console.log("Esto se va a ejecutar ANTES que el callback");

// console.log("1. Voy a esperar 2 segundos");

// setTimeout(() => {
//     console.log("Han pasado 2 segundos");
// }, 2000);

// console.log("3. Esto aparece antes que el mensaje 2");

// console.log("Iniciando contador cada 1 segundo");

// let contador = 0;

// const intervalo = setInterval(()=> {
//     contador ++;
//     console.log(`Tick ${contador}`);

//     if (contador === 5) {
//         clearInterval(intervalo);
//         console.log("Intervalo detenido");
//     }
// }, 1000);

function obtenerUsuario(id, callback) {
    console.log(`Pidiendo usuario ${id} al servidor...`);

    setTimeout(() => {
        const usuario = {
            id: id,
            nombre: "Ana García",
            email: "ana@ejemplo.com"
        };
    
        console.log("servidor respondió");
        callback(usuario);
        
    }, 2000)
}

console.log("inicio de la aplicación");

obtenerUsuario(1, (usuario) => {
    console.log("usuario recibido", usuario.nombre);
    console.log("email:", usuario.email)
})

console.log("la aplicación sigue funcionando mientras obtiene los datos")