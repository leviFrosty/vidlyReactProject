import http from "./httpService";
import { toast } from "react-toastify";
import { apiUrl } from "../config.json";
import { getGenres } from "./genreService";

const apiEndPoint = `${apiUrl}/movies`;

function movieUrl(id) {
  retrun`${apiEndPoint}/${id}`;
}

const { data: movies } = http.get(apiEndPoint);

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie.id), body);
  }

  return http.post(apiEndPoint, movie);
}

export function getMovies() {
  return http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
