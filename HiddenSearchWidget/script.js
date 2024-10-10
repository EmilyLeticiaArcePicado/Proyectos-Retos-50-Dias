document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    searchBtn.addEventListener('click', () => {
        searchBar.classList.toggle('expanded');
        searchInput.focus(); // Para que el input esté listo para escribir
    });
});
