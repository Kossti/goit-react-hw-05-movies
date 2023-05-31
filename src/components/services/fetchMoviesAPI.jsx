const API_KEY = '1f13035674a7f2a8b7f830aa8a5312a8';
const URL = 'https://api.themoviedb.org/3/';

export function getMovies() {
  return fetch(`${URL}trending/movie/day?api_key=${API_KEY}`).then(response =>
    response
      .json()
      //   .then(response => console.log(response.results))
      .catch(error => console.error(error))
  );
}

export function getMoviesBySearch(query) {
  return fetch(
    `${URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
  ).then(res => res.json());
}

// export function getMoviesBySearch(query) {
//   return fetch(
//     `${URL}search/movie?api_key=${API_KEY}&query${query}&language=en-US`
//   ).then(response =>
//     response
//       .json()
//       .then(response => console.log(response))
//       .catch(error => console.error(error))
//   );
// }

export function getMoviesDetails(movieId) {
  return fetch(`${URL}movie/${movieId}?api_key=${API_KEY}`).then(response =>
    response
      .json()
      //   .then(response => console.log(response))
      .catch(error => console.error(error))
  );
}

export function getMoviesCast(movieId) {
  return fetch(`${URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    response =>
      response
        .json()
        // .then(response => console.log(response))
        .catch(error => console.error(error))
  );
}

export function getMoviesReviews(movieId) {
  return fetch(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    response =>
      response
        .json()
        // .then(response => console.log(response))
        .catch(error => console.error(error))
  );
}
