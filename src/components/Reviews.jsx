import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesApiService } from "services/moviesApi";  

const moviesApi = new MoviesApiService();

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();
    moviesApi.ID = id;

    useEffect(() => { 
        const getReviews = async () => {
        const responce = await moviesApi.getReviews();
        setReviews(responce.results);
        }
        getReviews();
    }, []);
    
    return (
        <div>
            <ul>
                {reviews.map(({ author, id, content }) => (
                    <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
