const input = document.querySelector('#tarea');
const btn = document.querySelector('#addBtn');
const lista = document.querySelector('#lista');

function addTarea() {
    const texto = input.value.trim();
    if (!texto) return;
    const li = document.createElement('li');
    li.textContent = texto;
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = '❌';
    btnBorrar.classList.add('del');
    li.appendChild(btnBorrar);
    lista.appendChild(li);
    //lista.prependChild(li); añadir al principio de la lista
    // const segundo = lista.children[1];
    // if (segundo){
    //     lista.insertBefore(li, segundo);
    // } else {
    //     lista.appendChild(li);
    // };
    input.value='';
};

btn.addEventListener('click', addTarea);

lista.addEventListener('click', (e) =>{
    if (e.target.classList.contains('del')){
    e.target.parentElement.remove();
    };
});

lista.addEventListener('click', (e) =>{
    e.target.classList.toggle('done');
    lista.appendChild(e.target);
});

function insertarDetrasDe(textoReferencia, nuevaTarea){
    const items = document.querySelectorAll('#lista li');
    let referencia = null;
    items.forEach(li => {
        if(li.textContent.toLowerCase().includes(textoReferencia.toLowerCase())){
            referencia = li;
        };
    });
    if (referencia) {
        const liNuevo = document.createElement('li');
        liNuevo.textContent = nuevaTarea;
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = '❌';
        btnBorrar.classList.add('del');
        liNuevo.appendChild(btnBorrar);
        referencia.after(liNuevo);
    } else {
        alert(`No se ha encontrado ninbuna tarea que contenga "${textoReferencia}".`);
    };
};

function insertarDetrasDeTodas(palabra, nuevaTarea) {
    const items = document.querySelectorAll('#lista li');
    const coincidencias = [];
    items.forEach(li =>{
        if(li.textContent.toLowerCase().includes(palabra.toLowerCase())) {
            coincidencias.push(li);
        };
    });
    if (coincidencias.length === 0) {
        alert(`no hay tareas que contengan "${palabra}."`)
    }
    coincidencias.forEach(li =>{
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = nuevaTarea;
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = '❌';
        btnBorrar.classList.add('del');
        nuevoLi.appendChild(btnBorrar);
        li.after(nuevoLi);
    });
};

function duplicarTareasCoincidentes(palabra){
    const items = document.querySelectorAll('#lista li');
    const coincidencias = [];
    items.forEach(li => {
        if (li.textContent.toLowerCase().includes(palabra.toLowerCase())){
            coincidencias.push(li);
        };
    });
    coincidencias.forEach(li =>{
        const copia = li.cloneNode(true);
        // copia.style.color = 'blue'; lo cambio por un cambio de estilos, porque los style en linea tienen preferencia sobre los CSS, así que no marca en gris una tarea de copia
        copia.classList.add('copia');
        const delBtn = copia.querySelector('button'); //nos traemos el botón que tiene nuestro nodo copiado (copia)
        copia.append(` (copia)`); //ponemos la palabra al final del nodo (append con algo que no existe lo crea)
        copia.append(delBtn); //movemos el botón al final del nodo (append con algo que sí existe lo mueve de sitio)
        li.after(copia);
    });
};

document.querySelector('#insertarBtn').addEventListener('click', () =>{
    const ref = document.querySelector('#referencia').value.trim();
    const nueva = document.querySelector('#nueva').value.trim();
    if (ref && nueva) insertarDetrasDe(ref, nueva);
});

document.querySelector('#insertarMulti').addEventListener('click', () => {
    const palabra = document.querySelector('#palabra').value.trim();
    const nueva = document.querySelector('#nuevaMulti').value.trim();
    if (palabra && nueva) insertarDetrasDeTodas(palabra, nueva);
});

document.querySelector('#duplicarBtn').addEventListener('click', () =>{
    const palabra = prompt('¿Qué tarea quieres duplicar?');
    if (palabra) duplicarTareasCoincidentes(palabra);
});