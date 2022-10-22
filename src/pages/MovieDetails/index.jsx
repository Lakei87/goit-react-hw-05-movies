import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { GoBackLink, AdditionalInfo, Box, MovieInfo } from "components";
import { getMovieByID } from "services/moviesApi";
import { createGenresList } from "helpers/createGenresList";


export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const [genres, setGenres] = useState([]);
    const { id } = useParams();
    const location = useLocation();
    console.log(movie)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const responce = await getMovieByID(id);
                setMovie(responce);
                setGenres(createGenresList(responce.genres));
            } catch (error) {
                console.log(error);
            }
        };
        fetchMovie();
    }, [id]);
    
    return (
        <Box as='main' p={4}>
            <GoBackLink />
            {movie &&
                <MovieInfo
                    genres={genres}
                    poster={movie.poster_path}
                    title={movie.title}
                    date={movie.release_date.slice(0,4)}
                    vote={movie.vote_average}
                    overview={movie.overview}
                />
            }
            <AdditionalInfo location={location.state?.from ?? '/'} />
            <Suspense fallback={<div>Loading..</div>}>
                <Outlet/>
            </Suspense>
        </Box>
    );
};