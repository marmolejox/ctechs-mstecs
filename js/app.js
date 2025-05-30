document.addEventListener("DOMContentLoaded", () => {
    console.log("Successfully loaded.");
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.scroll-top-btn');

    // Mostrar u ocultar el botón según la posición del scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Scroll suave al hacer clic
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});