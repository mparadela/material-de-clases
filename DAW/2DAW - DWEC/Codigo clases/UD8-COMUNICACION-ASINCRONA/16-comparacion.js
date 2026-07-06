function paso1() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Paso 1 completado"), 500)
    });
};

function paso2(resultado1){
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Paso 2 (después de: ${resultado1})`), 500);
    });
};

function paso3(resultado2) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Paso 3 y final (después de: ${resultado2})`), 500);
    });
};

console.log("OPCIÓN 1: Con .then()");

paso1()
    .then((resultado1) =>{
        console.log(resultado1);
        return paso2(resultado1);
    })

    .then((resultado2)=> {
        console.log(resultado2);
        return paso3(resultado2);
    })

    .then((resultado3) => {
        console.log(resultado3);
        console.log("Todo completado (con .then)")
    })

    .catch((error) =>{
        console.    log("Error: ", error);
    });

async function ejecutarPasos() {
    try{
        const resultado1 = await paso1();
        console.log(resultado1);

        const resultado2 = await paso2(resultado1);
        console.log(resultado2);

        const resultado3 = await paso3(resultado2);
        console.log(resultado3);

        console.log("Todo completado con async/await");
    } catch (error){
        console.log("Error: ", error);
    }
    
}

ejecutarPasos();