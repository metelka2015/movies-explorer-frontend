function searchAllMovies(movies, request) { 
    const allMovies = movies.filter((movie) => {
      const query = request.toLowerCase().trim();
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      
      return movieRu.indexOf(query) !== -1 || movieEn.indexOf(query) !== -1;
    });
    return allMovies;
  }

function filterShortMovies (movies) {
    return movies.filter((mov) => mov.duration < 40);
  }

module.exports = {
    searchAllMovies,
    filterShortMovies,
}