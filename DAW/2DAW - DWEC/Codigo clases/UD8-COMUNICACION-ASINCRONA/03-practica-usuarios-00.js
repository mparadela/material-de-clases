// JSON copiado de la API (fragmento)
const usuarios = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "address": {
            "city": "Gwenborough"
        },
        "company": {
            "name": "Romaguera-Crona"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": {
            "city": "Wisokyburgh"
        },
        "company": {
            "name": "Deckow-Crist"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "address": {
            "city": "McKenziehaven"
        },
        "company": {
            "name": "Romaguera-Jacobson"
        }
    }
];

let html = "<ul>";

usuarios.forEach(usuario => {
    console.log(`Usuario: ${usuario.name} de ${usuario.address.city}`);
    html +=`
        <li>
        <strong>${usuario.name}</strong><br>
        ${usuario.email}<br>
        ${usuario.address.city}<br>
        ${usuario.company.name}
        </li>
    `;
});

html +=  "</ul>";

document.getElementById('usuarios').innerHTML = html;





        