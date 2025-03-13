document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
});

//Fade in on scroll
let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector(".carousel-container").style.transform = newTransform;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlide(slideIndex);
}

// Auto-slide every 4 seconds
setInterval(() => moveSlide(1), 4000);

// Initialize first slide
showSlide(slideIndex);