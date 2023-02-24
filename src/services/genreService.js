import {axiosService} from "./axiosService";
import {urls} from "../configs";

const genreService = {
    getGenre:()=> axiosService.get(urls.genre),
    genreSort:(with_genres=12) => axiosService.get(urls.movies, {params:{with_genres}})
}

export {genreService}