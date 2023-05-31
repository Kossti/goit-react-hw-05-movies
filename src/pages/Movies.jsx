import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'components/services/fetchMoviesAPI';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import Loading from 'components/Loading/Loading';
import css from './Movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState(null);
  const [totalMovies, setTotalMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;

    setMovies(null);
    setTotalMovies(null);
    setIsLoading(true);

    getMoviesBySearch(query)
      .then(data => {
        setMovies(data.results);
        setTotalMovies(data.total_results);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [query]);

  const handleInputChange = event => {
    setInputSearch(event.currentTarget.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const queryNormalized = form.query.value.toLowerCase().trim();

    setSearchParams({ query: queryNormalized });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          className={css.input}
          onChange={handleInputChange}
          value={inputSearch}
        />

        <button type="submit" className={css.submit}>
          Search
        </button>
      </form>

      {isLoading && <Loading />}
      {movies && <TrendingMoviesList movies={movies} />}
      {totalMovies === 0 && (
        <div className={css.noMovies}>No movies found.</div>
      )}
    </>
  );
};

export default Movies;
