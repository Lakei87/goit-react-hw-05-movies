import { Route, Routes } from "react-router-dom";
import { Cast, AppBar, Reviews } from "components";
import { Movies, Home, MovieDetails } from "pages";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};
