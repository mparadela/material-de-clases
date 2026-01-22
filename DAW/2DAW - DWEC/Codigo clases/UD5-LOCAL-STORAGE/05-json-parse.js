document.getElementById('btnEjemplos').addEventListener('click', () =>{
    console.clear();
    console.log('=== EJEMPLOS DE JSON.parse() ===\n');

    //Ejemplo 1: String con JSON simple
    const jsonString = '{"nombre":"Ana García", "edad":25,"ciudad":"Zaragoza"}';
    console.log('String JSON');
    console.log(jsonString);
    console.log(typeof jsonString); // "string"
    
    const personaRecuperada = JSON.parse(jsonString);
    console.log('\nConvertido a objeto');
    console.log(personaRecuperada);
    console.log(typeof personaRecuperada); // "object"
    console.log('Nombre: ', personaRecuperada.nombre );

    //Ejemplo 2: Array de objetosç
    const tareasJSON = '[{"id":1,"texto":"Estudiar"},{"id":2,"texto":"Practicar"}]';
    console.log(tareasJSON);
    const tareasRecuperadas = JSON.parse(tareasJSON);
    console.log('\nConvertido a array');
    console.log(tareasRecuperadas);
    console.log(Array.isArray(tareasRecuperadas)); // "true"
    console.log('Primeratarea: ',tareasRecuperadas[0].texto);

    //Ejemplo 3: Error si el JSON es inválido
    console.log('\n\n¿Qué pasa con JSON inválido?');
    try{
        const jsonInvalido = "{nombre: 'Ana'}"; // Comillas simples. Error
        JSON.parse(jsonInvalido);
    } catch (error) {
        console.error('error al parsear el JSON inválido');
        console.error(error.message);
    }
    try {
        const noEsJSON = "hola mundo"; // no es un JSON
        JSON.parse(noEsJSON);
    } catch (error){
        console.error('error al parsear un texto que no JSON');
        console.error(error.message);
    }

    //Ejemplo 4: Ciclo completo stringify -> parse
    console.log('\n\nCiclo completo');
    const original = {
        nombre: 'Juan',
        hobbies: ['programar','leer','jugar']
    };

    console.log('Original: ',original);

    //conertir a JSON
    const json = JSON.stringify(original);
    console.log('-> JSON',json);

    //convertir de vuelta
    const recuperado = JSON.parse(json);
    console.log('-> Recuperado: ',recuperado);

    console.log('\n¿Son iguales?');
    console.log('original === recuperado', original === recuperado); // false
    console.log('\nPero tienen los mismos datos: ', JSON.stringify(original)===JSON.stringify(recuperado)); // true
})