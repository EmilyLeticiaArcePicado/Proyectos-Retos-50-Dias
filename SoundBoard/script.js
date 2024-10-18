const buttons = document.querySelectorAll('.button');
const sounds = document.querySelectorAll('audio');
let currentSound = null;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (currentSound !== null) {
            currentSound.currentTime = 0;
            currentSound.pause();
        }

        currentSound = sounds[index];
        currentSound.play();
    });
});