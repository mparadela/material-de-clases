/*const cont = document.getElementById("contenedor");
console.log(cont.firstElementChild.textContent);*/

const parrafos = document.getElementsByClassName("rojo");

Array.from(parrafos).forEach(p => console.log(p.textContent));
//console.table(Array.from(parrafos));

const parrafos2 = document.querySelectorAll(".rojo");
parrafos2.forEach(p => console.log(p.textContent));
