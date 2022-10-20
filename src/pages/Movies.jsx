import SearchBox from '../components/SearchBox';
import MoviesList from 'components/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { MoviesApiService } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const moviesApi = new MoviesApiService();

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const updSearchQuery = searchParams.get('query');
  moviesApi.query = updSearchQuery;
  const location = useLocation();

  useEffect(() => {
    if (!updSearchQuery) return;

    const fetchMovies = async() => {
      const responce = await moviesApi.fetchMovies();
      setMovies(responce.results)
    };
    fetchMovies();
  }, [updSearchQuery, location]);

  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { query: name } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox onSubmit={updateQueryString} />
      {movies !== [] && (
        <MoviesList movies={movies}/>
      )}
    </main>
  );
  // const [user, setUser] = useState(null);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const username = searchParams.get("username");

//   useEffect(() => {
//     // Тут виконуємо асинхронну операцію,
//     // наприклад HTTP-запит за інформацією про користувача
//     if (username === "") return;

//     async function fetchUser() {
//       const user = await FakeAPI.getUser(username);
//       setUser(user);
//     }

//     fetchUser();
//   }, [username]);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   setSearchParams({ username: form.elements.username.value });
  // };

  // return (
  //   <>
  //     <form onSubmit={handleSubmit}>
  //       <input type="text" name="username" />
  //       <button type="submit">Search</button>
  //     </form>
  //     {/* {user && <UserInfo user={user} />} */}
  //   </>
  // );
};
