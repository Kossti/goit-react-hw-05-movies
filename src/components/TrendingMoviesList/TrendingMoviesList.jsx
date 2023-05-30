import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './TrendingMoviesList.module.css';
import PropTypes from 'prop-types';

const TrendingMoviesList = ({ trendingMovies, movies }) => {
  const location = useLocation();

  return (
    <div>
      {trendingMovies && (
        <>
          <h2 className={css.trendsMovieTitle}>Trending today</h2>
          <ul>
            {trendingMovies.map(({ title, id }) => (
              <li key={id} className={css.movie}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
      {movies && (
        <>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id} className={css.movie}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TrendingMoviesList;

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }).isRequired
  ),
};
