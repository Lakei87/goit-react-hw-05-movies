import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "api_key=5f364d2fc6b25c805674b50a1c63d59e";

export class MoviesApiService {
    constructor() {
        this.query = '';
        this.ID = ''
    };

    async fetchMovies() {
        const url = `${BASE_URL}/search/movie?${API_KEY}&query=${this.query}&language=en-US`;
        const responce = await axios.get(url);
        return responce.data;
    }

    async fetchTrending() {
        const url = `${BASE_URL}/trending/movie/day?${API_KEY}`;
        const responce = await axios.get(url);
        return responce.data;
    };

    async fetchMovieByID() {
        const url = `${BASE_URL}/movie/${this.ID}?${API_KEY}&language=en-US`;
        const responce = await axios.get(url);
        return responce.data;
    };

    async getCredits() {
        const url = `${BASE_URL}/movie/${this.ID}/credits?${API_KEY}&language=en-US`;
        const responce = await axios.get(url);
        return responce.data;
    };
    
    async getReviews() {
        const url = `${BASE_URL}/movie/${this.ID}/reviews?${API_KEY}&language=en-US`;
        const responce = await axios.get(url);
        return responce.data;
    };

};