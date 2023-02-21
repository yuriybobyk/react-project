import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getMovies: (page = 1)=>axiosService.get(urls.movies, {params: {page}}),
    getMoviesById: (id)=> axiosService.get(urls.movieById(id))

}

export {movieService}