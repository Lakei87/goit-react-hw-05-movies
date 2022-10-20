import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/moviesApi";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => { 
        const fetchReviews = async () => {
        const responce = await getReviews(id);
        setReviews(responce.results);
        }
        fetchReviews();
    }, [id]);
    
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
