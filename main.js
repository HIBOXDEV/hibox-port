document.addEventListener("DOMContentLoaded", function() {
    var redButton = document.querySelector(".red-button");
    var audio = document.getElementById("audio");
    var clicked = false;

    redButton.addEventListener("click", function() {
        if (!clicked) {
            audio.play();
            clicked = true;

            // Ocultar el desplazamiento de la página durante la animación
            document.body.style.overflow = "hidden";

            // Espera 2 segundos antes de ejecutar la segunda función
            setTimeout(function() {
                animateYellowTape();
            }, 1000);
        }
    });

    function animateYellowTape() {
        var yellowTape = document.querySelector(".yellow-tape");
        var audio = document.getElementById("audioo");

        var duration = 500; // Duración de la animación en milisegundos (10 segundos)
        var startTime = performance.now(); // Tiempo de inicio de la animación

        function animate() {
            var elapsedTime = performance.now() - startTime; // Tiempo transcurrido desde el inicio
            var progress = elapsedTime / duration; // Progreso de la animación (entre 0 y 1)

            // Calcula la posición horizontal de la cinta (de 0% a 100% de la ventana visible)
            var newPosition = progress * 100;
            yellowTape.style.transform = "translateX(" + newPosition + "vw)";

            if (progress < 1) {
                // Si la animación aún no ha terminado, programa el siguiente cuadro de animación
                requestAnimationFrame(animate);
            } else {
                // Si la animación ha terminado, elimina el elemento del "yellow-tape" del HTML
                yellowTape.remove();
                // Restaura el desplazamiento de la página
                document.body.style.overflow = "auto";

                // Muestra los elementos ocultos
                var hiddenContent = document.querySelectorAll('.content.hidden');
                hiddenContent.forEach(function(item) {
                    item.classList.remove('hidden');
                });
            }
        }

        // Reproduce el sonido
        audio.play();

        // Inicia la animación
        animate();
    }

    // Función para redirigir al inicio cuando se recarga la página
    window.addEventListener("beforeunload", function(event) {
        window.scrollTo(0, 0);
    });
});

function updateClock() {
    const now = new Date(); // Obtiene la fecha y hora actual
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Formatea las horas y minutos para asegurar que siempre tengan dos dígitos
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Construye la cadena de tiempo y la muestra en el elemento con id 'custom'
    const timeString = hours + ':' + minutes;
    document.getElementById('custom').textContent = timeString;
}

// Actualiza el reloj inmediatamente al cargar la página
updateClock();

// Establece el intervalo para actualizar el reloj cada segundo (1000 milisegundos)
setInterval(updateClock, 1000);
