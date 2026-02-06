// EJERCICIO: Convertir a async/await

function descargar(archivo) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${archivo} descargado`);
        }, 1000);
    });
}

// ESTO (con .then):
descargar("imagen1.jpg")
    .then((resultado) => {
        console.log(resultado);
        return descargar("imagen2.jpg");
    })
    .then((resultado) => {
        console.log(resultado);
        console.log("Todas las imágenes descargadas");
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// CONVERTIR A: async/await con try/catch
