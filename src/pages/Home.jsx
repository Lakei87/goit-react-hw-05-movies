import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { MoviesApiService } from "services/moviesApi";
import MoviesList from "components/MoviesList";

const moviesApi = new MoviesApiService();


export function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {        
        const fetchTrending = async() => {
            const responce = await moviesApi.fetchTrending();
            setMovies(responce.results)
        };
        fetchTrending();
    }, []);

    return (
        <>
            <h2>Trending now</h2>
            {movies && <MoviesList movies={movies} />}
        </>
    );
};

Home.propTypes = {
    movies: PropTypes.arrayOf().isRequired,
};