const caja = document.querySelector('.caja');

//Evento cuando empiezas a arrastrar

caja.addEventListener('dragstart', (e) =>{
    console.log('INICIO: empecé a arrastrar');
    //Feedback visual: semi-transparente
    e.target.style.opacity = '0.5';
});

//Evento mientras arrastras

caja.addEventListener('drag', (e) => {
    //Este evento se dispara constantemente
    //Normalmente no se usa
    //console.log('Arrastrando...');
});

//Evento cuando terminas de arrastrar

caja.addEventListener('dragend', (e) =>{
    console.log('FIN: dejé de arrastrar');
    e.target.style.opacity = '1';
})