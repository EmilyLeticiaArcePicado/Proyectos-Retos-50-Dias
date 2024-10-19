const jokeHeader = document.getElementById('joke-header');
const jokeText = document.getElementById('joke-text');
const newJokeBtn = document.getElementById('new-joke-btn');

async function getJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        
        
        const joke = data.value;

    
        jokeText.innerText = joke;
    } catch (error) {
        jokeHeader.innerText = "Error:";
        jokeText.innerText = "No se pudo obtener un chiste en este momento.";
        console.error("Error fetching joke:", error);
    }
}

newJokeBtn.addEventListener('click', getJoke);

