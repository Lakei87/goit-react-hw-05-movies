import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import MoviesList from 'components/MoviesList';
import { getMovies } from 'services/moviesApi';

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const updSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (!updSearchQuery) return;

    const fetchMovies = async() => {
      const responce = await getMovies(updSearchQuery);
      setMovies(responce.results)
    };
    fetchMovies();
  }, [updSearchQuery]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {movies !== [] && (
        <MoviesList movies={movies}/>
      )}
    </main>
  );
};
