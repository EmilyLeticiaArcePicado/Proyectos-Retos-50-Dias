const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=`;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const pagination = document.getElementById('pagination');

let currentPage = 1;
let totalPages = 1;
const pagesPerBlock = 10;

// Initial API call
getMovies(API_URL, currentPage);

async function getMovies(url, page = 1) {
    const res = await fetch(`${url}&page=${page}`);
    const data = await res.json();
    totalPages = data.total_pages;
    showMovies(data.results);
    setupPagination(page, totalPages);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        movieElement.innerHTML = `
            <img src="${poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/300'}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Sinopsis</h3>
                ${overview ? overview : 'No hay sinopsis disponible.'}
            </div>
        `;

        main.appendChild(movieElement);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) return 'green';
    else if (vote >= 5) return 'orange';
    return 'red';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm, 1);
        search.value = '';
    } else {
        window.location.reload();
    }
});

function setupPagination(currentPage, totalPages) {
    pagination.innerHTML = '';
    const totalBlocks = Math.ceil(totalPages / pagesPerBlock);
    const currentBlock = Math.ceil(currentPage / pagesPerBlock);

    const startPage = (currentBlock - 1) * pagesPerBlock + 1;
    const endPage = Math.min(currentBlock * pagesPerBlock, totalPages);

    if (currentBlock > 1) {
        const prevButton = createPaginationButton('Previous', startPage - 1);
        pagination.appendChild(prevButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = createPaginationButton(i, i);
        if (i === currentPage) pageButton.classList.add('active');
        pagination.appendChild(pageButton);
    }

    if (currentBlock < totalBlocks) {
        const nextButton = createPaginationButton('Next', endPage + 1);
        pagination.appendChild(nextButton);
    }
}

function createPaginationButton(text, page) {
    const button = document.createElement('button');
    button.innerText = text;
    button.addEventListener('click', () => getMovies(API_URL, page));
    return button;
}
