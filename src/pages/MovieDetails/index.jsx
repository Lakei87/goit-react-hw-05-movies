import { useEffect, useState } from "react";
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import GoBackLink from "components/GoBackLink";
import { getMovieByID } from "services/moviesApi";
import { Container, Poster, MovieDesc, Title, Popularity, Overview, Genres, Text } from "./movieDetails.styled";
import { createGenresList } from "helpers/createGenresList";

const urlImg = 'https://image.tmdb.org/t/p/w500/';

export function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const {poster_path, title, release_date, popularity, overview } = movie;
    const { id } = useParams();
    const location = useLocation();
    console.log(location)

    useEffect(() => { 
        const fetchMovie = async() => {
            const responce = await getMovieByID(id);
            setMovie(responce);
            setGenres(createGenresList(responce.genres));
        }
        fetchMovie();
    }, [id]);
    

    return (
        <main>
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
            <div>
                <p>additional information</p>
                <ul>
                    <li><Link to='cast' state={{from: location.state?.from ?? '/'}}>Cast</Link></li>
                    <li><Link to='reviews' state={{from: location.state?.from ?? '/'}}>Reviews</Link></li>
                </ul>
            </div>
            <Outlet/>
        </main>
    );
};
