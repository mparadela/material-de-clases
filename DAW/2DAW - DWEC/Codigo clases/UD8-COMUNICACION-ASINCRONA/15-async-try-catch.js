function obtenerDatos (exito) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito){
                resolve ("Datos obtenidos");
            } else {
                reject("Error: No se pudo conectar");
            }
        }, 1000)
    })
}

// async function cargarSinTryCatch(){
//     const datos = await obtenerDatos(false);
//     console.log(datos);
// }

// async function cargarConTryCatch() {
//     try{
//         console.log("Intentando obtener datos...");
//         const datos = await obtenerDatos(false);
//         console.log("datos: ", datos);
//     } catch (error) {
//         console.log("Error capturado: ", error)
//     } finally {
//         console.log("Operación terminada");
//     }
// }

// cargarConTryCatch();

async function cargarUsuario(id) {
    try {
        // Mostrar spinner
        console.log("Cargando...");
        
        const usuario = await obtenerDatos(true);
        console.log("Usuario cargado:", usuario);
        
        // Más operaciones...
        const otroDato = await obtenerDatos(true);
        console.log("Otro dato:", otroDato);
        
        return usuario;
        
    } catch (error) {
        console.error("Error al cargar:", error);
        // Mostrar mensaje al usuario
        return null;
        
    } finally {
        console.log("Ocultar spinner");
    }
}

cargarUsuario(1);
