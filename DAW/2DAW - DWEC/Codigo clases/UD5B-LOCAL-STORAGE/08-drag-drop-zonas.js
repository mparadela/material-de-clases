console.log('Aplicación inicializada');

// PASO 1: Configurar los elementos arrastrables

const items = document.querySelectorAll('.item');

items.forEach(item => {
    //Para cada item, añado un evento cuando EMPIEZO a arrastrarlo
    item.addEventListener('dragstart', (e) => {
        console.log('dragstart -', e.target.textContent);
        const itemId = e.target.dataset.id
        e.dataTransfer.setData('text/plain', itemId);
        //Muy importante guardar el ID del evento, para poder recuperarlo al hacer 'drop'
        /*Usamo dataTransfer.setData() para guardar la información sobre qué elemento estamos arrastrando.
        El primer parámetro es el tipo. Usamos 'text/plain' que es el estándar para texto simple.
        El segundo parámetro es el valor. Aquí guardamos el data-id del elemento, que es un identificador único que pusimos en el HTML. */
        console.log(' --> Guardado en dataTransfer:', itemId);
        //Feedback visual
        e.target.classList.add('dragging');
    });
    
    //Para cada item, añado un evento cuando TERMINO de arrastrarlo
    item.addEventListener('dragend', (e) => {
        console.log('dragend');
        //Quitar la clase visual
        e.target.classList.remove('dragging');
    });
});

//PASO 2: Configurar zonas para recibir drops

const zonas = document.querySelectorAll('.zona');

zonas.forEach(zona => {
    //Para cada zona, añado un evento cuando un elemento ENTRA en la zona
    zona.addEventListener('dragenter', (e) =>{
        e.preventDefault();
        console.log('dragenter en ', zona.id);
    });

    /*Para cada zona, añado un evento MIENTRAS el elemento está en la zona
    ESTE ES EL EVENTO MÁS IMPORTANTE. SIN ESTO CON SU PREVENT DEFAULT EL DROP NUNCA SE DISPARARÁ*/
    zona.addEventListener('dragover', (e) => {
        e.preventDefault();
        zona.classList.add('drag-over');
    });

    //Para cada zona, añado un evento cuando un elemento SALE de la zona
    zona.addEventListener('dragleave', (e) => {
        //Solo quitar la case si salimos de la zona entera, no de un elemento hijo dentro de ella
        if (e.target === zona){
            zona.classList.remove('drag-over');
        }
    });

    //Para cada zona, añado un evento cuando un elemento se SUELTA en la zona
    zona.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('--> drop en', zona.id);
        // Quitar feedback visual
        zona.classList.remove('drag-over');       
        // RECUPERAR el ID que guardamos en dragstart
        const itemId = e.dataTransfer.getData('text/plain');
        console.log('--> Recuperado de dataTransfer:', itemId);    
        // Buscar el elemento real en el DOM
        const itemArrastrado = document.querySelector(`[data-id="${itemId}"]`);
        console.log('--> Elemento encontrado:', itemArrastrado.textContent);         
        // MOVER el elemento a esta zona
        // appendChild() MUEVE el elemento (no lo duplica)
        zona.appendChild(itemArrastrado);
        console.log('--> Item movido a', zona.id);
        });
});