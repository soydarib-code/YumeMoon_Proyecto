const imagenesDulces = document.querySelectorAll(".imagen-dulce");

imagenesDulces.forEach(function(imagen) {
    imagen.addEventListener("click", function() {
        imagen.classList.toggle("abierta");

        const abierta = imagen.classList.contains("abierta");
        imagen.setAttribute("aria-expanded", abierta);
    });
});