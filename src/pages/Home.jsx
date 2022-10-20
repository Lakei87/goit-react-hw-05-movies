import { useEffect, useState } from "react";
import { getTrending } from "services/moviesApi";
import MoviesList from "components/MoviesList";
import { Box } from "components/Box";


export function Home() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {        
        const fetchMovies = async() => {
            const responce = await getTrending();
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