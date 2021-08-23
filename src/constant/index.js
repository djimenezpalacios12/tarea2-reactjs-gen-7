// ! Revisar Documentacion de la api
// TODO: Limpiar código
/**
 * Llave API (v3 auth)
 * 4029d79d74e42928c21cfa6bcdf1eda4
 *
 *
 * Ejemplo de Solicitud API
 * https://api.themoviedb.org/3/movie/550?api_key=4029d79d74e42928c21cfa6bcdf1eda4
 *
 *
 * Token de acceso de lectura a la API (v4 auth)
 * eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDI5ZDc5ZDc0ZTQyOTI4YzIxY2ZhNmJjZGYxZWRhNCIsInN1YiI6IjYxMjJmMzA3MGYyZmJkMDA4MThkYzRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B9ur5AxwekfEQA3x2GVX4-piclkKFJ6IDoLpYVuOsqs
 */

const api_key = "api_key=4029d79d74e42928c21cfa6bcdf1eda4";
const base_url = "https://api.themoviedb.org/3";
const search_url = "/discover/movie?sort_by=popularity.desc&";
// const search_API = base_url + search_url + api_key;

export const movieSearchAPI = () => `${base_url}${search_url}${api_key}`;
