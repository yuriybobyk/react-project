const baseURL = 'https://api.themoviedb.org/4';
const imageURL = 'https://image.tmdb.org/t/p/w500/';
const discover = '/discover';
const movies = '/movie';
const genres = '/genre';

const urls = {
    movies:{
        moviesURL: `${discover}${movies}`,
        genresURL: `${genres}${movies}/list`,
        imageURL: imageURL
    }
}

export {urls, baseURL, imageURL}