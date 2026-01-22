const lista = document.getElementById('lista');

//Variable global para guardar qué elemento estamos arrastrando:
let elementoArrastrado = null;

//EVENTOS DE LOS ELEMENTOS ARRASTRABLES
//Delegación de eventos: escuchamos la lista entera:

lista.addEventListener('dragstart', (e)=> {
    if(e.target.classList.contains('tarea')){
        elementoArrastrado = e.target;
        e.target.classList.add('dragging');
        console.log('--> arrastrando: ', e.target.texContent);
    }
});

lista.addEventListener('dragend', (e)=>{
    if(e.target.classList.contains('tarea')){
        e.target.classList.remove('dragging');
        elementoArrastrado = null;

        //Limpiar todas las clases de feedback visual
    //     document.querySelectorAll('.tarea').forEach(t =>{
    //         t.classList.remove('drag-over-top', 'drag-over-bottom');
    //     });
    }
});

//Eventos de la zona del drop

lista.addEventListener('dragover', (e) => {
    e.preventDefault(); // Recordad que es obligatorio

    //Encontrar sobre qué tarea estamos pasando
    const tareaDestino = e.target.closest('.tarea');

    //No hacer nada si estamos sobre el mismo elemento
    if (!tareaDestino || tareaDestino === elementoArrastrado){
        return;
    }

    //Calcular si estamos en la mitad superior o inferior
    const rect = tareaDestino.getBoundingClientRect();
    const offsetY = e.clientY - rect.top;
    const mitad = rect.height / 2;

    //Limpiar las clases anteriores
    //tareaDestino.classList.remove('drag-over-top', 'drag-over-bottom');

    if (offsetY < mitad){
        //Mitad SUPERIOR --> insertar ANTES
        //tareaDestino.classList.add('drag-over-top');
        lista.insertBefore(elementoArrastrado, tareaDestino);
    } else {
        //Mitad INFERIOR --> insertar DESPUES
        //tareaDestino.classList.add('drag-over-bottom');
        lista.insertBefore(elementoArrastrado, tareaDestino.nextSibling);
    }
});

lista.addEventListener('drop', (e) =>{
    e.preventDefault();

    //Limpiar feedback visual
    // document.querySelectorAll('.tarea').forEach(t =>{
    //     t.classList.remove('drag-over-top', 'drag-over-bottom');
    // });
    console.log('Orden actualizado');
})