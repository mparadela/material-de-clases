const API_URL ='https://pokeapi.co/api/v2/pokemon/'

const searchInput = document.getElementById('search');
const  btnBuscar = document.getElementById('btn-buscar');
const resultado = document.getElementById('resultado');

//Funcion para buscar pokemon

async function buscarPokemon() {
    const nombre = searchInput.value.trim().toLowerCase();

    if (nombre === "") {
        mostrarError('Por favor, escribe un nombre');
        return;
    }

    mostrarLoading();

    try {
        const response = await fetch(API_URL + nombre);

        if (!response.ok){
            if (response.status === 404) {
                mostrarError('Pokemon no existe');
            } else {
                mostrarError('Error en la APLI')
            }

            return;
        }
        const data = await response.json();
        mostrarPokemon(data);
    }   catch (error) {
        mostrarError('Error: ', error.message);
    }
}

function mostrarLoading(){
    resultado.innerHTML = `
        <div class= "loading">
            <div class = "spinner"></div>
            <p>Buscnado...</P>
        </div>
        `;
}

function mostrarError(mensaje){
    resultado.innerHTML = `
        <div class = "mensaje-error">
            <p>${mensaje}</P
        </div>
        `;
}

function mostrarPokemon(pokemon) {

    const nombre = pokemon.name;
    const imagen = pokemon.sprites.front_default;
    const tipos = pokemon.types.map(t => t.type.name).join(', ');
    const hp = pokemon.stats[0].base_stat;
    const ataque = pokemon.stats[1].base_stat;
    const defensa = pokemon.stats[2].base_stat;

    resultado.innerHTML = `
        <div class = "pokemon-card">
            <h2>${nombre.toUpperCase()}</h2>
            <img src = "${imagen}" alt = "${nombre}>
           <p><strong>Tipos: </strong> ${tipos}</p>
           <div class="stats">
            <p>♥️ HP: ${hp}</p>
            <p>⚔️ Ataque: ${ataque}</p>
            <p>🛡️ Defensa: ${defensa}</p>
           </div>
        </div>
    `;
};

btnBuscar.addEventListener('click', buscarPokemon);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarPokemon();
    }
});