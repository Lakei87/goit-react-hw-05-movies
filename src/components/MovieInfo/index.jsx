import { countVoteArerage } from "helpers/countVoteAverage";
import { Container, Poster, MovieDesc, Title, Popularity, Overview, Genres, Text } from "./movieInfo.styled";
import posterNotFound from '../../images/poster-not-found.png';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export function MovieInfo({
    genres,
    poster,
    title,
    date,
    vote,
    overview
}) {
    const chooseProfile = urlData => {
        return (urlData ? `${baseUrl}${urlData}` : posterNotFound);
    };
    
    return (
        <Container>
            <Poster src={chooseProfile(poster)} alt="poster" />
            <MovieDesc>
                <Title>{title} ({date})</Title>
                <Popularity>User Score: {countVoteArerage(vote)}%</Popularity>
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
    );
};

// MovieInfo.propTypes = {
//     genres: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     vote: PropTypes.number.isRequired,
//     overview: PropTypes.string.isRequired,
// };
