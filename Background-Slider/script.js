const body = document.body
const slides = document.querySelectorAll('.slide');


let currentIndex = 0;
let activeSlide = 0

function setBgToBody () {
    body.style.backgroundImage = slides[ activeSlide ].style.backgroundImage
}

function setActiveSlide () {
    slides.forEach((slide) => slide.classList.remove('active'))
    slides[ activeSlide ].classList.add('active')
}

setBgToBody()


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

document.getElementById('right').addEventListener('click', nextSlide);
document.getElementById('left').addEventListener('click', prevSlide);

