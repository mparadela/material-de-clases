console.log("1. Inicio");

// Operación que tarda un poco 

console.log("2. Procesando datos...");
for (let i=0; i< 10000000000; i++){
    
}

console.log("3. Datos procesados");

console.log("4. Fin");

console.log("1. Inicio");

console.log("2. Pidiendo datos (esto tarda 2 segundos)...");
setTimeout(() =>{
    console.log("2. Datos recibidos (han pasado los dos segundos)");
}, 2000);
console.log("3. Mientras tanto, sigo ejecutando cosas");
console.log("4. Fin del codigo principal");