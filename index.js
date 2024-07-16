const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const point = document.querySelector('.point');
let counter = 0;

// Initialize navigation dots
slides.forEach((slide, index) => {
    const div = document.createElement('div');
    div.className = 'button';
    point.appendChild(div);
});

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

// Function to reset dot colors
const reset = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = 'gray';
    });
};

// Function to set active dot
const setActiveDot = () => {
    reset();
    buttons[counter].style.backgroundColor = 'white';
};

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
    setActiveDot();
}

// Function to start auto-sliding
function startAutoSlide() {
    setInterval(handleNext, 5000);
}

// Event listeners for buttons
nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);

// Event listeners for navigation dots
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        counter = i;
        updateSlider();
    });
});

// Initialize slider and start auto-sliding
initSlider();
startAutoSlide();

document.addEventListener('DOMContentLoaded', () => {
    const bag = document.getElementById('bag');
    const images = bag.getElementsByTagName('img');
    const totalImages = images.length;
    const imagesPerPage = 3;
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    let currentIndex = 0;

    function updateImageDisplay() {
        const offset = currentIndex * (320); // 320 is the width of the container (320px)
        bag.style.transform = `translateX(-${offset}px)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        if (currentIndex < totalPages - 1) {
            currentIndex++;
            updateImageDisplay();
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateImageDisplay();
        }
    });

    // Initialize the display
    updateImageDisplay();
});

