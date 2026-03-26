const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    mensaje.textContent = "✅ Formulario enviado correctamente";
    mensaje.style.color = "lightgreen";
});
