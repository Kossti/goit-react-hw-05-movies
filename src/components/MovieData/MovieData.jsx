import React from 'react';
import css from './MovieData.module.css';
import PropTypes from 'prop-types';

const MovieData = ({ movie }) => {
  const {
    title,
    original_title,
    vote_average,
    overview,
    genres,
    poster_path,
    release_date,
  } = movie || {};

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const userScore = Math.round(vote_average * 10);
  const genresData = genres
    ? genres.map(genres => [genres.name]).join(', ')
    : ' ';
  const releaseData = new Date(`${release_date}`).getFullYear();
  const imgURL = poster_path ? `${IMG_URL}${poster_path}` : '';

  return (
    <>
      <div className={css.cardFilm}>
        <img src={imgURL} alt={title} width="200" className={css.img} />
        <div className={css.cardFilmDetails}>
          <h2 className={css.title}>
            {original_title} ({releaseData})
          </h2>
          <p className={css.score}>User Score: {userScore}% </p>
          {overview && (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}
          {genresData && (
            <>
              <h4>Genres</h4>
              <p>{genresData}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieData;

MovieData.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
