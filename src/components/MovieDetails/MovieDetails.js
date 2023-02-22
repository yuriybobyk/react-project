import {Rating} from "@mui/material";
import './MovieDetails.css'

const MovieDetails = ({movieDetails}) => {

    const {
        budget,
        overview,
        original_language,
        homepage,
        production_companies,
        poster_path,
        backdrop_path,
        title,
        belongs_to_collection,
        production_countries,
        release_date,
        genres,
        status,
        vote_average,
        adult
    } = movieDetails;


    const getPoster = `https://image.tmdb.org/t/p/w400${poster_path}`
    const getBackdrop = `https://image.tmdb.org/t/p/original${backdrop_path}`

    let genresName = '';
    for (const genre of genres) {
        genresName =  `${genresName} ${genre.name}`;

    }
    return (
        <div className={'movieDetails'}>
            <img className={'backdrop'} src={getBackdrop} alt={title}/>
            <div className={'details'}>
                <div>
                    <img src={getPoster} alt={title}/>
                </div>
                <div className={'movie_content'}>
                    <div className={'genre'}>
                        <h2 className={'movie_title'}>{title}</h2>
                        <div className={'badge'}>{genresName.trim()}</div>
                    </div>
                    {belongs_to_collection?.name &&
                        <div><b>Belongs to collection</b>: {belongs_to_collection.name}</div>}
                    <div><b>Original language</b>: {original_language}</div>
                    <div><b>Overview</b>: {overview}</div>
                    {production_companies[0] &&
                        <div><b>Production companies</b>: {production_companies[0].name}</div>}
                    {production_countries[0] &&
                        <div><b>Production countries</b>: {production_countries[0].name}</div>}
                    <div><b>Release date</b>: {release_date}</div>
                    <div><b>Status</b>: {status}</div>
                    <div><b>Budget</b>: ${budget}</div>
                    {homepage &&
                        <div><b>Homepage</b>: <a href={homepage} target={'_blank'} rel="noreferrer">{homepage}</a>
                        </div>}
                    <div><b>Rating</b>: {vote_average}</div>
                    <Rating name="half-rating-read" value={vote_average / 2} precision={0.5} readOnly/>
                    {adult && <div style={{color: 'aqua'}}>Movie 18+</div>}
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};