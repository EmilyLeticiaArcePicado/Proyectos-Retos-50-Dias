const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        container.classList.add('hover-left');
        container.classList.remove('hover-right');
    } else if (e.key === 'ArrowRight') {
        container.classList.add('hover-right');
        container.classList.remove('hover-left');
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        container.classList.remove('hover-left', 'hover-right');
    }
});