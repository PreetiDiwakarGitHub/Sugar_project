// const slides = document.querySelectorAll('.slide');
// const nextBtn = document.querySelector('.nextBtn');
// const prevBtn = document.querySelector('.prevBtn');
// let counter = 0;

// // Function to initialize slider
// function initSlider() {
//     slides.forEach((slide, index) => {
//         slide.style.left = `${index * 100}%`;
//     });
// }

// // Function to handle next button click
// function handleNext() {
//     counter++;
//     if (counter >= slides.length) {
//         counter = 0;
//     }
//     updateSlider();
// }

// // Function to handle previous button click
// function handlePrev() {
//     counter--;
//     if (counter < 1) {
//         counter = slides.length - 1;
//     }
//     updateSlider();
// }

// // Function to update slider position
// function updateSlider() {
//     slides.forEach((slide) => {
//         slide.style.transform = `translateX(-${counter * 100}%)`;
//     });
// }

// // Function to start auto-sliding
// function startAutoSlide() {
//     setInterval(handleNext, 5000);
// }

// // Event listeners for buttons
// nextBtn.addEventListener('click', handleNext);
// prevBtn.addEventListener('click', handlePrev);

// // Initialize slider
// initSlider();

// // Start auto-sliding
// startAutoSlide();
// const point = document.querySelector('.point');
// const slidesimg = document.querySelectorAll('.slide');
// const sliderContainer = document.querySelector('.slider-container');
// const length = slidesimg.length;

// for (let i = 0; i < length; i++) {
//     const div = document.createElement('div');
//     div.className = 'button';
//     point.appendChild(div);
// }

// const buttons = document.querySelectorAll('.button');
// buttons[0].style.backgroundColor = 'white';

// const reset = () => {
//     buttons.forEach((button) => {
//         button.style.backgroundColor = 'transparent';
//     });
// };

// buttons.forEach((button, i) => {
//     button.addEventListener('click', () => {
//         reset();
//         sliderContainer.style.transform = `translateX(-${i * 100}%`;
//         button.style.backgroundColor = 'white';
//     });
// });

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
