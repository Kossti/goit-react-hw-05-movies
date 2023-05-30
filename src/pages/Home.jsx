import { getMovies } from 'components/services/fetchMoviesAPI';
import TrendingMoviesList from 'components/TrendingMoviesList/TrendingMoviesList';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    getMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(console.log);
  }, []);

  return <TrendingMoviesList trendingMovies={trendingMovies} />;
};

export default Home;
