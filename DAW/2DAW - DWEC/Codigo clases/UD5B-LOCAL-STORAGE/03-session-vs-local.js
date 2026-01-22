//Referencias al DOM
 const resultadoLocal = document.getElementById('resultadoLocal');
 const resultadoSession = document.getElementById('resultadoSession');

 // LOCALSTORAGE
 document.getElementById('btnGuardarLocal').addEventListener('click', () => {
    const ahora = new Date().toLocaleTimeString();
    localStorage.setItem('dato', `Guardado a las ${ahora}`);
    resultadoLocal.innerHTML = `<strong>Guardado en localStorage</strong><br>Hora: ${ahora}`;
 });
 document.getElementById('btnLeerLocal').addEventListener('click', () =>{
    const dato = localStorage.getItem('dato');
    if (dato){
        resultadoLocal.innerHTML = `<strong>Leído de localStorage: </strong><br>${dato}`;
    } else {
        resultadoLocal.innerHTML = 'No hay datos en localStorage';
    }
 });

  // SESSIONSTORAGE
 document.getElementById('btnGuardarSession').addEventListener('click', () => {
    const ahora = new Date().toLocaleTimeString();
    sessionStorage.setItem('dato', `Guardado a las ${ahora}`);
    resultadoSession.innerHTML = `<strong>Guardado en sessionStorage</strong><br>Hora: ${ahora}`;
 });
 document.getElementById('btnLeerSession').addEventListener('click', () =>{
    const dato = sessionStorage.getItem('dato');
    if (dato){
        resultadoSession.innerHTML = `<strong>Leído de sessionStorage: </strong><br>${dato}`;
    } else {
        resultadoSession.innerHTML = 'No hay datos en sessionStorage';
    }
 });

 //Mostrar automáticamente si hay datos guardados
 window.addEventListener('DOMContentLoaded', () =>{
    const datoLocal = localStorage.getItem('dato');
    const datoSession = sessionStorage.getItem('dato');
    if (datoLocal){
        resultadoLocal.innerHTML = `<strong>Dato encontrado al cargar: </strong><br>${datoLocal}`;
    }
    if (datoSession){
        resultadoSession.innerHTML = `<strong>Dato encontrado al cargar: </strong><br>${datoSession}`;
    }   
 })