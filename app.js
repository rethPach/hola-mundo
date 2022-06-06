const element = document.getElementById("holaMundoBoton");

element.addEventListener('click', clickHandler, false);

function clickHandler(e) {
    alert("Hola tiooooo, soy un boton");
}