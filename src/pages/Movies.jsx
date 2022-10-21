import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, MoviesList, SearchBox } from 'components';
import { getMovies } from 'services/moviesApi';

export function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const updSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (!updSearchQuery) return;

    const fetchMovies = async () => {
      try {
        const responce = await getMovies(updSearchQuery);
        setMovies(responce.results);
      } catch (error) {
        console.log(error);
      };
    };
    
    fetchMovies();
  }, [updSearchQuery]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <Box as='main' p={4}>
      <SearchBox onSubmit={updateQueryString} />
      {movies && <MoviesList movies={movies}/>}
    </Box>
  );
};
