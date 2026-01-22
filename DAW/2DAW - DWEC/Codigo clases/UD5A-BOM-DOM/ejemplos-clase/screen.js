function inspectorNavegador() {
const info = `
<h2>Información del Navegador</h2>
<ul>
    <li><b>URL: </b> ${location.href}</b></li>
    <li><b>Dominio:</b> ${location.hostname}</li>
    <li><b>Idioma: </b> ${navigator.language}</b></li>
    <li><b>Sistema: </b> ${navigator.platform}</b></li>
    <li><b>Tamaño ventana: </b> ${innerWidth}x${innerHeight}</b></li>
    <li><b>Tamaño pantalla: </b> ${screen.width}x${screen.height}</b></li>

</ul>`;

document.body.innerHTML = info;
};
