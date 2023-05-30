// import Cast from 'components/Cast/Cast';
import MovieData from 'components/MovieData/MovieData';
import { getMoviesDetails } from 'components/services/fetchMoviesAPI';
// import Reviews from 'components/Reviews/Reviews';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  useEffect(() => {
    getMoviesDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  return <div>{movie && <MovieData movie={movie} />}</div>;
};

export default MoviesDetails;
