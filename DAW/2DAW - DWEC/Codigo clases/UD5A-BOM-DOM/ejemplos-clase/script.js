let miVentana // variable global para reutilizar la misma ventana

document.getElementById("abrir").onclick = () => {
    miVentana = window.open(
        "https://sites.google.com/iesrioarba.es/iesrioarba/inicio",
        "ventanaDemo",
        "width= 600, height= 400, resizable=yes,scrollbars=yes"
    );
};

document.getElementById("reutilizar").onclick = () => {
    window.open(
        "https://wikipedia.org",
        "ventanaDemo",
        "width=600, height=400, resizable=yes,scrollbars=yes"
    );
};

document.getElementById("forzar").onclick = () => {
    window.open(
    "https://wikipedia.org",
    "_blank",
     "width=600, height=400, resizable=yes,scrollbars=yes"
    );
};
 if (!navigator.onLine) {
    alert("Estás sin conexión. Algunas funciones no estarán disponibles");
 };
