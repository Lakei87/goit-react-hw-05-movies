import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesApiService } from "services/moviesApi";  

const moviesApi = new MoviesApiService();
const urlImg = 'https://image.tmdb.org/t/p/w500/';


export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  moviesApi.ID = id;

  useEffect(() => { 
    const getCredits = async () => {
      const responce = await moviesApi.getCredits();
      setCast(responce.cast);
      console.log(responce.cast);
    }
    getCredits();
  }, []);

  return (
    <div>
      <ul>
        {cast.map(({id, profile_path, name, character}) => (
          <li key={id}>
            <img src={`${urlImg}${profile_path}`} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
