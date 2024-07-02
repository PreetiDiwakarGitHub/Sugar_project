const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
let counter = 0;

// Function to initialize slider
function initSlider() {
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });
}

// Function to handle next button click
function handleNext() {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    updateSlider();
}

// Function to handle previous button click
function handlePrev() {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    updateSlider();
}

// Function to update slider position
function updateSlider() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// Function to start auto-sliding
function startAutoSlide() {
    setInterval(handleNext, 5000);
}

// Event listeners for buttons
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);

// Initialize slider
initSlider();

// Start auto-sliding
startAutoSlide();
