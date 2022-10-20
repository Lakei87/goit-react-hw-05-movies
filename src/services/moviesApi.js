import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=5f364d2fc6b25c805674b50a1c63d59e";

export async function getMovies(query) {
    const url = `${BASE_URL}/search/movie?${API_KEY}&query=${query}&language=en-US`;
    const responce = await axios.get(url);
    return responce.data;
}

export async function getTrending() {
    const url = `${BASE_URL}/trending/movie/day?${API_KEY}`;
    const responce = await axios.get(url);
    return responce.data;
};

export async function getMovieByID(id) {
    const url = `${BASE_URL}/movie/${id}?${API_KEY}&language=en-US`;
    const responce = await axios.get(url);
    return responce.data;
};

export async function getCredits(id) {
    const url = `${BASE_URL}/movie/${id}/credits?${API_KEY}&language=en-US`;
    const responce = await axios.get(url);
    return responce.data;
};

export async function getReviews(id) {
    const url = `${BASE_URL}/movie/${id}/reviews?${API_KEY}&language=en-US`;
    const responce = await axios.get(url);
    return responce.data;
};