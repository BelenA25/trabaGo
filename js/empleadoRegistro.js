let button = document.querySelector("#empresaButton");
console.log(button);

button.addEventListener('click', loadEmpresa);

function loadEmpresa() {
    window.location="empresaRegistro.html";
}