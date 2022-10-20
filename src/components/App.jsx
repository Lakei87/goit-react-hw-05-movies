import { Route, Routes } from "react-router-dom";
import { Movies, Home, MovieDetails } from "pages";
import Cast from "./Cast";
import AppBar from "./AppBar";
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
