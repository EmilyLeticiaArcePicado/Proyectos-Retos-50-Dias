const sections = document.querySelectorAll('.section');

function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();