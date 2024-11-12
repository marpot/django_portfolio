let slideIndex = 1;
function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-item");

    if (!slides || slides.length === 0) {
        console.error("No slides found in the carousel.");
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ukrywa wszystkie slajdy
    }
    slides[slideIndex - 1].style.display = "flex"; // Wyświetla bieżący slajd
}

function moveSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Pokaż pierwszy slajd przy załadowaniu
document.addEventListener('DOMContentLoaded', function() {
    showSlides(slideIndex); // Wywołanie początkowe, aby pokazać pierwszy slajd
});
