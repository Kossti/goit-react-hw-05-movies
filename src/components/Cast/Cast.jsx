import { getMoviesCast } from 'components/services/fetchMoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';

const Cast = () => {
  const [castMovie, setCastMovie] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  const BASE_URL = `https://image.tmdb.org/t/p/w500`;

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMoviesCast(movieId);
        setCastMovie(data.cast);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchCast(movieId);
  }, [movieId]);

  if (!castMovie) {
    return;
  }

  return (
    <>
      {castMovie.length > 0 ? (
        <ul className={css.cast}>
          {error && <p>{error}</p>}
          {!castMovie ||
            (castMovie.length === 0 && <p>No cast available</p>)}{' '}
          {castMovie &&
            castMovie.map(({ id, name, character, profile_path }) => (
              <li key={id} className={css.castCard}>
                {profile_path ? (
                  <img
                    src={`${BASE_URL}${profile_path}`}
                    alt={name}
                    width="100"
                    height={'auto'}
                    className={css.imgCast}
                  />
                ) : (
                  <div className={css.imgNotFound}>Image not found</div>
                )}
                <div>
                  <p> Name: {name}</p>
                  <p> Character: {character}</p>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <div>No cast available</div>
      )}
    </>
  );
};

export default Cast;
