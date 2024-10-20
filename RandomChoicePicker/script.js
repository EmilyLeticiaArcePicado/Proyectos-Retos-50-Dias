const choicesInput = document.getElementById('choices-input');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const choicesList = document.getElementById('choices-list');

// Update the choices list as the user types
choicesInput.addEventListener('input', function() {
    const choices = choicesInput.value.split(',').map(choice => choice.trim()).filter(choice => choice);
    choicesList.innerHTML = choices.map(choice => `<div>${choice}</div>`).join('');
});

// Pick a random choice when Enter is pressed
choicesInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of the Enter key

        const choices = choicesInput.value.split(',').map(choice => choice.trim()).filter(choice => choice);

        if (choices.length > 0) {
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            resultText.textContent = `You picked: ${randomChoice}`;
            resultContainer.style.display = 'block';
        } else {
            resultText.textContent = ''; // Clear previous result if no choices are present
            resultContainer.style.display = 'none'; // Hide result container if there are no choices
        }
    }
});

