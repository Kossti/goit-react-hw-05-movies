const API_KEY = '1f13035674a7f2a8b7f830aa8a5312a8';
const URL = 'https://api.themoviedb.org/3/';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export function getMovies() {
  return fetch(`${URL}trending/movie/day?api_key=${API_KEY}`).then(response =>
    response
      .json()
      //   .then(response => console.log(response.results))
      .catch(error => console.error(error))
  );
}

//  пошук фільму за ключовим словом на сторінці фільмів
export function getMoviesBySearch(searchQuery) {
  return fetch(
    `${URL}search/movie?api_key=${API_KEY}&query${searchQuery}`
  ).then(response =>
    response
      .json()
      //   .then(response => console.log(response))
      .catch(error => console.error(error))
  );
}

// запит повної інформації про фільм для сторінки кінофільму
export function getMoviesDetails(movieId) {
  return fetch(`${URL}movie/${movieId}?api_key=${API_KEY}`).then(response =>
    response
      .json()
      //   .then(response => console.log(response))
      .catch(error => console.error(error))
  );
}

// запит інформації про акторський склад для сторінки кінофільму
export function getMoviesCast(movieId) {
  return fetch(`${URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response =>
      response
        .json()
        // .then(response => console.log(response))
        .catch(error => console.error(error))
  );
}
// запит оглядів для сторінки кінофільму.
export function getMoviesReviews(movieId) {
  return fetch(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response =>
      response
        .json()
        // .then(response => console.log(response))
        .catch(error => console.error(error))
  );
}
