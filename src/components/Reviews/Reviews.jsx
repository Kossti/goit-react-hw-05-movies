import { getMoviesReviews } from 'components/services/fetchMoviesAPI';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMoviesReviews(movieId);
        setReviewsMovie(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);

  if (!reviewsMovie) {
    return;
  }

  return (
    <>
      {reviewsMovie.length > 0 ? (
        <ul>
          {error && <p>{error}</p>}
          {reviewsMovie.map(({ id, author, content }) => (
            <li key={id}>
              Author: <b>{author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.noReviews}>
          We don't have any reviews for this movie.
        </div>
      )}
    </>
  );
};

export default Reviews;
