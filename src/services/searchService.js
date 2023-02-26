import {axiosService} from "./axiosService";
import {urls} from "../configs";


const searchService ={
    search: (query, page = 1) => axiosService.get(urls.search, {params: {query, page}})
}

export {searchService}