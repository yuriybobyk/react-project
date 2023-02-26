import './MovieListCard.css'
import {NavLink,} from "react-router-dom";
import {Rating} from "@mui/material";


const MovieListCard = ({movie}) => {

    const {title, id, poster_path, vote_average} = movie;

    const getPoster = `https://image.tmdb.org/t/p/w200${poster_path}`

    const movieId = id.toString();


    return (
        <div className={'movie'} >
            <h4>{title}</h4>
            <img className={'poster'} src={getPoster} alt={"title"}/>
            <Rating name="half-rating-read" value={vote_average / 2} precision={0.5} readOnly/>
            <button className={'btn'}><NavLink to={movieId}>More Details</NavLink></button>

        </div>

    );
};

export {MovieListCard};