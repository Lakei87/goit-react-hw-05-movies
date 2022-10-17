import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { MoviesApiService } from "services/moviesApi";
import MoviesList from "components/MoviesList";
import { Box } from "components/Box";

const moviesApi = new MoviesApiService();


export function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {        
        const fetchMovies = async() => {
            const responce = await moviesApi.fetchTrending();
            setMovies(responce.results)
        };
        fetchMovies();
    }, []);

    return (
        <Box as='main' p={4}>
            <h2>Trending now</h2>
            {movies && <MoviesList movies={movies}/>}
        </Box>
    );
};

Home.propTypes = {
    movies: PropTypes.arrayOf().isRequired,
};