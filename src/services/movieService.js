import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getMovies:(page=1)=>axiosService.get(urls.movies.moviesURL, {params:page}),
    getPosterBiId:(movie_id, image)=>axiosService.get(`${urls.movies.imageURL}/${movie_id}/${image}`)

}

export {movieService}