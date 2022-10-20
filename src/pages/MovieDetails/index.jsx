import { useEffect, useState } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import GoBackLink from "components/GoBackLink";
import { getMovieByID } from "services/moviesApi";
import { Container, Poster, MovieDesc, Title, Popularity, Overview, Genres, Text } from "./movieDetails.styled";
import { createGenresList } from "helpers/createGenresList";
import { Box } from "components/Box";
import AdditionalInfo from "components/AdditionalInfo";

const urlImg = 'https://image.tmdb.org/t/p/w500/';

export function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const {poster_path, title, release_date, popularity, overview } = movie;
    const { id } = useParams();
    const location = useLocation();

    useEffect(() => { 
        const fetchMovie = async() => {
            const responce = await getMovieByID(id);
            setMovie(responce);
            setGenres(createGenresList(responce.genres));
        }
        fetchMovie();
    }, [id]);
    

    return (
        <Box as='main' p={4}>
            <GoBackLink />
            <Container>
                <Poster src={`${urlImg}${poster_path}`} alt="poster" />
                <MovieDesc>
                    <Title>{title} ({release_date})</Title>
                    <Popularity>{popularity}</Popularity>
                    <Overview>
                        Overview
                        <Text>{overview}</Text>
                    </Overview>
                    <Genres>
                        Genres
                        <Text>{genres}</Text>
                    </Genres>
                </MovieDesc>
            </Container>
            <AdditionalInfo location={location.state?.from ?? '/'} />
            <Outlet/>
        </Box>
    );
};
