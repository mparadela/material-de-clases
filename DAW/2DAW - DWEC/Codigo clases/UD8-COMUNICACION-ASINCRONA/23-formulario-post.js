console.log("=== FORMULARIO CON POST ===");

const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', async(evento) => {
    evento.preventDefault();

    console.log("Formulario enviado");

    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').value;

    const nuevoPost = {
        title: titulo,
        body: contenido,
        userId: 1
    };

    console.log("Datos a enviar: ", nuevoPost);

    try {
        resultado.innerHTML = "Enviando...";

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
           
            body: JSON.stringify(nuevoPost)
        })
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const postCreado = await response.json();
        console.log("Post Creado: ", postCreado);

        resultado.innerHTML = `
            <div class = "exito">
            Post creado correctamente
            <p><strong>ID: </strong> ${postCreado.id}</p>
            <p><strong>Título: </strong> ${postCreado.title}</p>
            </div>
            `;

            formulario.reset();
    } catch (error){
        console.log("Error: ", error);
        resultado.innerHTML = `
        <div class="error">
        Error al crear el post: ${error.message}
        </div>
        `
    }

})

/* CÓDIGOS POST:
201 - Created (recurso creado)
200 - OK (operación exitosa)
400 - Bad Request (datos mal formados)
401 - Unauthorized (no autenticado)
403 - Forbidden (sin permisos)
422 - Unprocessable Entity (validación falló)
*/