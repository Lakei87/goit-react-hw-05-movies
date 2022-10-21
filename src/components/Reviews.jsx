import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/moviesApi";
import { ReviewsItem } from "components";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();

    useEffect(() => { 
        const fetchReviews = async () => {
            try {
                const responce = await getReviews(id);
                setReviews(responce.results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchReviews();
    }, [id]);
    
    return (
        <section>
            {reviews.length > 0 ?
                <ul>
                    {reviews.map(({ author, id, content }) => (
                        <ReviewsItem
                            key={id}
                            author={author}
                            content={content} />
                      ))}
                </ul> :
                <p>There are no reviews yet</p>
            }
        </section>
    );
};
