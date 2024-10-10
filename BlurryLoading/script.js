const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// Start the blur process
const intervalId = setInterval(() => {
    load++;
    if (load > 99) clearInterval(intervalId);

    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}, 30);

// Scale function
const scale = (num, inMin, inMax, outMin, outMax) => 
    ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;