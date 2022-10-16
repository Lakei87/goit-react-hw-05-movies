import { useParams } from "react-router-dom";
import { MoviesApiService } from "services/moviesApi";
import { Outlet } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams();

    return (
        <div>
            
            <Outlet/>
        </div>
    );
};
