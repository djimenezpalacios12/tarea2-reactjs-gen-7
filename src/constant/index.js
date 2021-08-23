const api_key = "api_key=4029d79d74e42928c21cfa6bcdf1eda4";
const base_url = "https://api.themoviedb.org/3";
const search_url = "/discover/movie?sort_by=popularity.desc&";

export const movieSearchAPI = () => `${base_url}${search_url}${api_key}`;
