window.addEventListener('scroll', function() {
    const homeContent = document.querySelector('.homeContent');
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 500, 0);
    homeContent.style.opacity = opacity;
});

let currentIndex = 0;
const slides = document.querySelectorAll('.project');
const totalSlides = slides.length;

function showSlide(index) {
    const carouselContainer = document.querySelector('.carousel-container');
    const offset = -index * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; 
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop to the first slide
    }
    showSlide(currentIndex);
}

// Automatic slide every 5 seconds
setInterval(() => {
    moveSlide(1); // Move to the next slide
}, 5000);

// Show the initial slide
showSlide(currentIndex);
