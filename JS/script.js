/*****
 * Javascript: Lenguaje de programación para interactividad en la página web.
 * Derechos reservados a César Elguera - Fuego y Carbón
 *****/

// 1. Selección de elementos HTML corregidos
const elTrack = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("carouselPrev");
const nextButton = document.getElementById("carouselNext");
const dotsContainer = document.getElementById("carouseldots");

let currentSlide = 0;
let autoPlay;

// 2. Generación dinámica de puntos (dots)
slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.classList.add("carousel-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
        currentSlide = index;
        updateCarousel();
        restartAutoPlay();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-dot");

// 3. Función para actualizar la posición del carrusel
function updateCarousel() {
    // Verificación de que elTrack existe antes de modificarlo
    if (elTrack) {
        elTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

// Para verificar la actualización inicial de los indicadores:
updateCarousel();

// 4. Funciones de navegación
function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateCarousel();
}

function previousSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateCarousel();
}

// 5. Asignación de eventos a los botones
if (nextButton) {
    nextButton.addEventListener("click", () => {
        nextSlide();
        restartAutoPlay();
    });
}

if (prevButton) {
    prevButton.addEventListener("click", () => {
        previousSlide();
        restartAutoPlay();
    });
}

// 6. Control del movimiento automático (AutoPlay)
function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 4000);
}

function restartAutoPlay() {
    clearInterval(autoPlay);
    startAutoPlay();
}

startAutoPlay();
