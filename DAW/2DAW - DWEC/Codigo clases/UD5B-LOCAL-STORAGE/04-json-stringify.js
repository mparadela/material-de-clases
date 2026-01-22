document.getElementById('btnEjemplos').addEventListener('click', () =>{
    console.clear();
    console.log('=== EJEMPLOS DE JSON.stringify() ===\n');

    //Ejemplo 1: Objeto simple
    const persona = {
        nombre: 'Ana García',
        edad: 25,
        ciudad: 'Zaragoza'
    }

    const personaJSON = JSON.stringify(persona);
    console.log('Objeto JavaScript');
    console.log(persona);
    console.log(typeof persona); // "object"
    console.log('\nConvertido a JSON (string');
    console.log(personaJSON);
    console.log(typeof personaJSON); // "string"

    //Ejemplo 2: array de objetos
    const tareas = [
        {id:1, texto: 'Estudiar JavaScript', completada:false},
        {id:2, texto: 'Hacer ejercicios', completada:true},
        {id:3, texto: 'Repasar localStorage', completada:false}
    ];
    const tareasJSON = JSON.stringify(tareas);
    console.log('\n\nArray de objetos:');
    console.log(tareas);
    console.log('\nConvertido a JSON:');
    console.log(tareasJSON);

    //Ejemplo 3: JSON "bonito": stringify acepta un 3er parámetro: espaciado
    const tareasJSONBonito = JSON.stringify(tareas, null,2);
    console.log('\n\nJSON con formato (más legible):');
    console.log(tareasJSONBonito);

    //Ejemplo 4: ¿Qué cosas NO se pueden convertir?
    const problematico = {
        nombre: 'Juan',
        saludar: function(){return `hola ${problematico.nombre};`}, //NO lo va a convertir
        fecha: new Date(), //Lo convierte a string, no podremos trabajar con cálculos de fechas
        indefinido: undefined, //Lo va a OMITIR
        nulo: null //null sí se va a guardar
    }
    console.log('\n\nObjeto con elementos problemáticos');
    console.log(problematico);
    console.log('\nConvertido a JSON (pierde la función y undefined):');
    console.log(JSON.stringify(problematico,null,2));

});