// Tailwind CSS configuration
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
            colors: {
                'primary': '#1a1b4b',
                'secondary': '#e6f3ff',
            }
        }
    }
};

// JavaScript to toggle mobile menu
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Smooth scroll to sections
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element not found: ${target}`);
    }
}

// Carousel functionality for hero section
const images = [
    'bigi1.jpg',
    'bigi2.jpg',
    'bigi3.jpg' // Add more images as needed
];
let currentIndex = 0;

function changeBackground() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        currentIndex = (currentIndex + 1) % images.length; // Loop through images
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    } else {
        console.error('Hero section not found');
    }
}

// Preload images
images.forEach(image => {
    const img = new Image();
    img.src = image;
});

// Change background every 5 seconds
setInterval(changeBackground, 5000);

// Event listeners (if applicable)
document.getElementById('menu-toggle-button').addEventListener('click', toggleMenu);
// Add more event listeners as needed for smooth scroll or other functionalities
