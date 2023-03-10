const baseURL = 'https://api.themoviedb.org/3';

const movie = 'movie'

const urls = {
    movies: `/discover/${movie}`,
    movieById:(id)=>`${movie}/${id}`,
    genre: `/genre/${movie}/list`,
    search: '/search/movie'


}

export {urls, baseURL}