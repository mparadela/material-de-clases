const titulo = document.getElementById("titulo");
//titulo.textContent = "Lista de frutas actualizada";

//titulo.innerHTML = "<em>Lista de frutas actualizada</em>";

//titulo.innerHTML = "<p>No va a funcionar</p>";

const lista = document.getElementById("lista");

const nuevaFruta = document.createElement("li");
const nuevaFruta2 = document.createElement("li");
const nuevaFruta3 = document.createElement("li");

nuevaFruta.textContent = "Melón";
nuevaFruta2.textContent = "Kiwi";
nuevaFruta3.textContent = "Mango";

const tercero = lista.children[2];

lista.appendChild(nuevaFruta);
lista.insertBefore(nuevaFruta2, lista.firstChild);
lista.insertBefore(nuevaFruta3, tercero);
//lista.prepend(nuevaFruta2);

titulo.style.color = "blue";
titulo.style.textAlign = "center";

const boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
    const nueva = document.createElement("li");
    nueva.textContent = "Pera";
    lista.appendChild(nueva);
});

const boton2 = document.getElementById("boton2");

boton2.addEventListener("click", () =>{
    lista.removeChild(nuevaFruta);
});



