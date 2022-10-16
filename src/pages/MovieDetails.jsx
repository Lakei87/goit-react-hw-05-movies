import { useParams } from "react-router-dom";
import { MoviesApiService } from "services/moviesApi";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const moviesApi = new MoviesApiService();

export default function MovieDetails() {
    const { id } = useParams();
    moviesApi.ID = id;

    useEffect(() => { 
        const fetchMovie = async() => {
            const responce = await moviesApi.fetchMovieByID();
            console.log(responce)
        }
        fetchMovie();
    }, []);

    return (
        <div>

            <Outlet/>
        </div>
    );
};
