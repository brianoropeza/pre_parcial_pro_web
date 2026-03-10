const LeerMas = document.getElementById("leerMas")
const extra = document.getElementById("extra")

LeerMas.addEventListener("click", function () {

    if (extra.hidden) {
        extra.hidden = false;
        LeerMas.textContent = "leer menos";
    } else {
        extra.hidden = true;
        LeerMas.textContent = "leer mas";
    }
});

const btnOscuro = document.getElementById("modoOscuro");
 btnOscuro.addEventListener("click", function(){

document.body.classList.toggle("dark-mode")

});