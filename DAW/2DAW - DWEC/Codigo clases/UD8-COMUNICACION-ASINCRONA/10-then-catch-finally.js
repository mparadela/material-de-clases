function obtenerDatos(exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve("Datos obtenidos");
            } else {
                reject("Error: No se pudo conectar al servidor");
            }
        }, 1000);
    });
}

console.log("Prueba 1: exito");

obtenerDatos(true)
    .then((resultado)=>{
        console.log("exito", resultado);
    })
    .catch((error) => {
        console.log("error", error);
    })
    .finally(() =>{
        console.log("operación terminada. Esto siempre se ejecuta");
    });

obtenerDatos(false)
    .then((resultado)=>{
        console.log("exito", resultado);
    })
    .catch((error) => {
        console.log("error", error);
    })
    .finally(() =>{
        console.log("operación terminada. Esto siempre se ejecuta");
    });
