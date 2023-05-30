// Encuentra al elemento HTML (el boton) mediante su ID
const miBoton = document.getElementById("miBoton");

// Define la funcion que se ejecutará cuando ocurra el evento click en el boton
function handleClick() {
   alert("¡Hola! Has hecho click en el botón.");
}

// Agrega un event listener (Oyente de evento) para escuchar el click del boton
miBoton.addEventListener("click", handleClick);
