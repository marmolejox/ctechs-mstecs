document.addEventListener("DOMContentLoaded", () => {
    console.log("Successfully loaded.");
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.querySelector('.scroll-top-btn');


    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });


    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});