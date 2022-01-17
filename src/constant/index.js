// Necesario crear cuenta en TMDb para obtener el API KEY
const api_key = "api_key=This is not api key";
const base_url = "https://api.themoviedb.org/3";
const search_url = "/discover/movie?sort_by=popularity.desc&";

export const movieSearchAPI = () => `${base_url}${search_url}${api_key}`;
