import {axiosService} from "./axiosService";
import {urls} from "../configs";

const genreService = {
    getGenre:()=> axiosService.get(urls.genre),
    genreSort: (id, page = 1) => axiosService.get(`${urls.movies}`, {params: {page, with_genres: id}}),
}

export {genreService}