let button = document.querySelector("#empleadoButton");
console.log(button);

button.addEventListener('click', loadEmpleado);

function loadEmpleado() {
    window.location="empleadoRegistro.html";
}