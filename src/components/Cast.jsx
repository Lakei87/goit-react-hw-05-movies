import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "services/moviesApi";  
import { CastItem } from "components";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => { 
    const fetchCredits = async () => {
      try {
        const responce = await getCredits(id);
        setCast(responce.cast);
      } catch (error) {
        console.log(error)
      }
    };
    fetchCredits();
  }, [id]);

  return (
    <section>
      <ul>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem
            key={id}
            profile={profile_path}
            name={name}
            character={character} />
        ))}
      </ul>
    </section>
  );
};
