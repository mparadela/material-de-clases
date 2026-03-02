// ============================================
// EJERCICIO 2: EXPLORADOR DE POKÉMON
// ============================================

// 1. CONSTANTES Y VARIABLES GLOBALES
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
let pokemonIdActual = 1;

// 2. SELECCIÓN DE ELEMENTOS DEL DOM
const inputBusqueda = document.querySelector("#input-busqueda");
const btnBuscar = document.querySelector("#btn-buscar");
const btnAnterior = document.querySelector("#btn-anterior");
const btnSiguiente = document.querySelector("#btn-siguiente");
const infoPokemon = document.querySelector("#info-pokemon");
const busquedaError = document.querySelector("#busqueda-error");
const loading = document.querySelector("#loading");

// 3. FUNCIÓN PRINCIPAL: OBTENER POKÉMON
async function obtenerPokemon(nombreOId) {
    try {
        mostrarLoading();
        
        const response = await fetch(`${API_URL}${nombreOId}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error("Pokémon no encontrado");
            }
            throw new Error(`Error: ${response.status}`);
        }
        
        const datos = await response.json();
        mostrarPokemon(datos);
        
    } catch (error) {
        if (error.message === "Pokémon no encontrado") {
            mostrarError("❌ Pokémon no encontrado. Intenta con otro nombre o número.");
        } else if (error.message.includes("Failed to fetch")) {
            mostrarError("🌐 Error de conexión. Verifica tu conexión a internet.");
        } else {
            mostrarError(`⚠️ Error: ${error.message}`);
        }
    } finally {
        ocultarLoading();
    }
}

// 4. FUNCIÓN: MOSTRAR POKÉMON
function mostrarPokemon(datos) {
    // Actualizar ID actual
    pokemonIdActual = datos.id;
    
    // Obtener tipos
    const tipos = datos.types.map(t => {
        const tipo = t.type.name;
        return `<span class="tipo-badge tipo-${tipo}">${tipo}</span>`;
    }).join('');
    
    // Crear HTML
    infoPokemon.innerHTML = `
        <div class="pokemon-card">
            <h2>${capitalizar(datos.name)}</h2>
            <p class="pokemon-id">#${datos.id.toString().padStart(3, '0')}</p>
            <img src="${datos.sprites.front_default}" alt="${datos.name}" class="pokemon-imagen">
            
            <div class="pokemon-tipos">
                ${tipos}
            </div>
            
            <div class="pokemon-detalles">
                <div class="detalle-item">
                    <strong>Peso</strong>
                    <span>${datos.weight / 10} kg</span>
                </div>
                <div class="detalle-item">
                    <strong>Altura</strong>
                    <span>${datos.height / 10} m</span>
                </div>
            </div>
        </div>
    `;
    
    // Actualizar botones
    actualizarBotones();
}

// 5. FUNCIÓN: MOSTRAR ERROR
function mostrarError(mensaje) {
    infoPokemon.innerHTML = `
        <div class="mensaje-error">
            <h3>${mensaje}</h3>
            <p>Intenta buscar otro Pokémon</p>
        </div>
    `;
}

// 6. FUNCIÓN: VALIDAR INPUT
function validarInput(valor) {
    if (valor.trim() === "") {
        inputBusqueda.classList.add("input-error");
        busquedaError.textContent = "Escribe un nombre o número";
        busquedaError.classList.add("mostrar");
        return false;
    }
    
    inputBusqueda.classList.remove("input-error");
    busquedaError.classList.remove("mostrar");
    return true;
}

// 7. FUNCIÓN: BUSCAR POKÉMON
function buscarPokemon() {
    const valor = inputBusqueda.value.trim();
    
    if (!validarInput(valor)) {
        return;
    }
    
    // Si es número, buscar por ID
    // Si es texto, buscar por nombre (en minúsculas)
    const busqueda = isNaN(valor) ? valor.toLowerCase() : valor;
    
    obtenerPokemon(busqueda);
}

// 8. FUNCIÓN: POKÉMON ANTERIOR
function pokemonAnterior() {
    if (pokemonIdActual > 1) {
        pokemonIdActual--;
        obtenerPokemon(pokemonIdActual);
    }
}

// 9. FUNCIÓN: POKÉMON SIGUIENTE
function pokemonSiguiente() {
    if (pokemonIdActual < 150) {
        pokemonIdActual++;
        obtenerPokemon(pokemonIdActual);
    }
}

// 10. FUNCIÓN: ACTUALIZAR BOTONES DE NAVEGACIÓN
function actualizarBotones() {
    // Deshabilitar botón anterior si estamos en el ID 1
    btnAnterior.disabled = pokemonIdActual <= 1;
    
    // Deshabilitar botón siguiente si estamos en el ID 150
    btnSiguiente.disabled = pokemonIdActual >= 150;
}

// 11. FUNCIONES LOADING
function mostrarLoading() {
    loading.classList.remove("oculto");
    infoPokemon.innerHTML = "";
}

function ocultarLoading() {
    loading.classList.add("oculto");
}

// 12. FUNCIÓN AUXILIAR: CAPITALIZAR
function capitalizar(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// 13. EVENT LISTENERS
btnBuscar.addEventListener("click", buscarPokemon);
btnAnterior.addEventListener("click", pokemonAnterior);
btnSiguiente.addEventListener("click", pokemonSiguiente);

// Enter en el input
inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        buscarPokemon();
    }
});

// 14. INICIALIZACIÓN
obtenerPokemon(1);