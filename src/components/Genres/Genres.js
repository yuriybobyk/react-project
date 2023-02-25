import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Genre} from "../Genre/Genre";
import './Genres.css'
import {movieActions} from "../../redux";

const Genres = () => {

    const {genres} = useSelector(({movies})=>movies);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getGenre());
    }, [dispatch])

    return (
        <div>
            <div className={'genres'}>
                {genres && genres.map(genre=> <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};