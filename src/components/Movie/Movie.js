import './Movie.css'
import {NavLink} from "react-router-dom";
import {Rating} from "@mui/material";

const Movie = ({movie}) => {

    const {title, id, poster_path, vote_average, genre_ids} = movie;

    const getPoster = `https://image.tmdb.org/t/p/w200${poster_path}`

    return (
        <div className={'movie'} >
            <h4>{title}</h4>
            <img className={'poster'} src={getPoster} alt={"title"}/>
            <Rating name="half-rating-read" value={vote_average / 2} precision={0.5} readOnly/>
            <NavLink className={'link'} to={id.toString()}>More Details</NavLink>
        </div>

    );
};

export {Movie};