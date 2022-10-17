import { Link, useParams } from "react-router-dom";
import { MoviesApiService } from "services/moviesApi";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Poster, MovieDesc, Title, Popularity, Overview, Genres, Text } from "./movieDetails.styled";
import { createGenresList } from "helpers/createGenresList";

const moviesApi = new MoviesApiService();
const urlImg = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetails() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const {poster_path, title, release_date, popularity, overview } = movie;
    const { id } = useParams();
    moviesApi.ID = id;

    useEffect(() => { 
        const fetchMovie = async() => {
            const responce = await moviesApi.fetchMovieByID();
            setMovie(responce);
            setGenres(createGenresList(responce.genres));
        }
        fetchMovie();
    }, []);
    

    return (
        <main>
            <Link to={'/'}>go back</Link>
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
                    <li><Link to='cast'>Cast</Link></li>
                    <li><Link to='reviews'>Reviews</Link></li>
                </ul>
            </div>
            <Outlet/>
        </main>
    );
};
