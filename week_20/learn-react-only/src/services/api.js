const API_KEY = "bd0458a68bef456d47b49d8bd40a464f";
const BASE_URl = "https://api.themoviedb.org/3";
export const getPopularMovies = async () => {
    const response = await fetch(
        `${BASE_URl}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
};
export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URl}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data.results;
};
