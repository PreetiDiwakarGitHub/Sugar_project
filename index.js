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
    const imageWidth = 320; // Adjust based on your image width
    const totalPages = Math.ceil(totalImages / imagesPerPage);
    let currentIndex = 0;

    function updateImageDisplay() {
        const offset = currentIndex * (imageWidth * imagesPerPage);
        bag.style.transform = `translateX(-${offset}px)`;
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= totalPages) {
            currentIndex = 0; // Wrap around to the first set of images
        }
        updateImageDisplay();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalPages - 1; // Wrap around to the last set of images
        }
        updateImageDisplay();
    });

    // Initialize the display
    updateImageDisplay();
});

let scroll = document.querySelector(".Lipstick");
let backbtn = document.getElementById("prev_button");
let btn = document.getElementById("next_button");
scroll.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scroll.scrollLeft+=e.deltaY;
});
btn.addEventListener("click",()=>{
    scroll.style.scrollBehavior = "smooth";
    scroll.scrollLeft+=900;
})
backbtn.addEventListener("click",()=>{
    scroll.scrollLeft-=900;
})
