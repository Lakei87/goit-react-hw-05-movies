import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "services/moviesApi";  

const urlImg = 'https://image.tmdb.org/t/p/w500/';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => { 
    const fetchCredits = async () => {
      const responce = await getCredits(id);
      setCast(responce.cast);
    }
    fetchCredits();
  }, [id]);

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
