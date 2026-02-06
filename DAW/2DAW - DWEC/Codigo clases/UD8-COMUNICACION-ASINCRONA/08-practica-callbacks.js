const miPromesa = new Promise((resolve, reject) => {
    console.log("Promesa en ejecución...");

    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("Operacion exitosa");
        } else {
            reject("Algo salio mal");
        }
    }, 2000);
});

console.log("promesa creada, estado pending")
console.log(miPromesa);