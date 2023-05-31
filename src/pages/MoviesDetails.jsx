import AddInfo from 'components/AddInfo/AddInfo';
import BackLinkButton from 'components/BackLinkButton/BackLinkButton';
import MovieData from 'components/MovieData/MovieData';
import { getMoviesDetails } from 'components/services/fetchMoviesAPI';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
// import Reviews from 'components/Reviews/Reviews';
// import Cast from 'components/Cast/Cast';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backlinkRef = location.state?.from ?? '/';

  useEffect(() => {
    getMoviesDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <div>
      <BackLinkButton backlinkRef={backlinkRef} />
      {movie && <MovieData movie={movie} />}
      <AddInfo location={backlinkRef} />
      <Outlet />
    </div>
  );
};

export default MoviesDetails;
