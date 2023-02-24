import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genreSlice";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getGenre());
    })

    return (
        <div>
            <div>
                {genres && genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};