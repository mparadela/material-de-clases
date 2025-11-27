/* Recoger datos textarea y botón
Validaciones: no vacío, números válidos, entre 0 y 10, mínimo 5 notas --> funcion validarNotas(notas) --> comprueba y devuelve true or false
Convertir string a array de tnumeros -- splir, map, filter
Calcular nota media, máxima, minima, total --> reduce, Math, length
Distribución; suspensos aprobados, notables, sobresalientes --> filter
porcetaje aprobados, cantidad de alumnos sobre/bajo media --> filter, 
Ranking de mayor a menor --> sort

0- seleccionar DOM
1- convertir string
2- validar array
3- calcular estadísticas
4- generar los resultados en el html
5- mostrar los resultados */

const textareaNotas = document.getElementById("notas");
const btnAnalizar = document.getElementById("btnAnalizar");
const divResultados = document.getElementById("resultados");

function procesarNotas() {
    const texto = textareaNotas.value.trim();

    //validación 1 no vación
    if (texto === "") {
        alert("Por favor, introduce las notas");
        return null;
    }

    //convertimos a array para el resto de validaciones: split --> para usar el separador de comas + map --> convertir cada string en un numero + filter --> quitar valores no numéricos (NaN)
    const notas = texto
        .split(",")
        .map(n => parseFloat(n.trim()))
        .filter(n => !isNaN(n));

    // todos los valores deben ser numeros validos
    if (notas.length === 0){
        alert("No se han introducido notas válidas");
        return null;
    }

    //validar notas entre 0 y 10
    const notasInvalidas = notas.filter(n => n <0 || n>10);
    if (notasInvalidas.length > 0) {
        alert("Todas las notas deben estar entre 0 y 10")
        return null;
    }

    //minimo 5 notas
    if (notas.length<5) {
        alert("Se necesitan al menos 5 notas para el análisis");
        return null;
    }

    return notas;
}

function calcularEstadisticas(notas) {
    //media
    const media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;

    //nota maxima
    const maxima = Math.max(...notas);

    //nota minima
    const minima = Math.min(...notas);

    //total estudiantes
    const totalEstudiantes = notas.length;

    //rangos
    const suspensos = notas.filter(n => n<5);
    const aprobados = notas.filter(n => n>=5 && n<7);
    const notables = notas.filter(n => n>=7 && n<9);
    const sobresalientes = notas.filter(n => n>9);

    //% aprobados
    const totalAprobados = notas.filter(n => n>= 5).length
    const porcentajeAprobados = (totalAprobados / totalEstudiantes *100).toFixed(1);

    //por encima y por debajo de la media
    const sobreMedia = notas.filter(n => n > media);
    const bajoMedia = notas.filter(n => n < media);
    
    // ranking
    const ranking = [...notas].sort((a, b) => b - a);

    return {
        media,
        maxima,
        minima,
        totalEstudiantes,
        suspensos,
        aprobados,
        notables,
        sobresalientes,
        porcentajeAprobados,
        sobreMedia,
        bajoMedia,
        ranking
    };
}

function mostrarResultados(stats) {
    const html = `
        <h3> ANALISIS DE LAS NOTAS </h3>
    <div class = "seccion">
        <p class="estadistica">Nota media: ${stats.media.toFixed(2)}<p>
        <p class="estadistica">Nota maxima: ${stats.maxima}<p>
        <p class="estadistica">Nota minima: ${stats.minima}<p>
        <p class="estadistica">Total de estudiantes: ${stats.totalEstudiantes}<p>
    <div>

    <div class = "seccion">
        <p class="estadistica">Suspensos: ${stats.suspensos}<p>
        <p class="estadistica">Aprobados: ${stats.aprobados}<p>
        <p class="estadistica">Notabes: ${stats.notables}<p>
        <p class="estadistica">Sobresalientes: ${stats.sobresalientes}<p>
    <div>

    <div class = "seccion">
        <p class="estadistica">% aprobados: ${stats.porcentajeAprobados}<p>
        <p class="estadistica">Alumnos por encima de la media: ${stats.sobreMedia}<p>
        <p class="estadistica">Alumnos por debajo de la medias: ${stats.bajoMedia}<p>
    <div>

    <div class = "seccion">
        <h3>Ranking de notas de mayor a menor:</h3>
        <p class="estadistica">${stats.ranking.join(" -> ")}<p>
    <div>
        `;

    divResultados.innerHTML = html
}

function analizarNotas() {
    const notas = procesarNotas();

    if (notas === null) {
        return;
    }

    const estadisticas = calcularEstadisticas(notas);

    mostrarResultados(estadisticas);
}

btnAnalizar.addEventListener("click", analizarNotas);