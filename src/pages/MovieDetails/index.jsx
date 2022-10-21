import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { GoBackLink, AdditionalInfo, Box, MovieInfo } from "components";
import { getMovieByID } from "services/moviesApi";
import { createGenresList } from "helpers/createGenresList";


export function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const {poster_path, title, release_date, vote_average, overview } = movie;
    const { id } = useParams();
    const location = useLocation();

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
            <MovieInfo
                genres={genres}
                poster={poster_path}
                title={title}
                date={release_date}
                vote={vote_average}
                overview={overview}
            />
            <AdditionalInfo location={location.state?.from ?? '/'} />
            <Outlet/>
        </Box>
    );
};