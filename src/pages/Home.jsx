import { useEffect, useState } from "react";
import { MoviesList, Box } from "components";
import { getTrending } from "services/moviesApi";


export default function Home() {
    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const responce = await getTrending();
                setMovies(responce.results);
            } catch (error) {
                console.log(error);
            }
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