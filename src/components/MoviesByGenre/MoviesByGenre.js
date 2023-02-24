import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices/genreSlice";

const MoviesByGenre = () => {

    const {moviesByGenreId} = useSelector(state => state.genres);

    const id = +query.get('genreId')

    const dispatch =useDispatch()

    const [query, setquery] = useSearchParams({genreId:35});

    useEffect(()=>{
        dispatch(genreActions.getMoviesByGenreId({id}))
    },[dispatch])

    return (
        <div>
            MoviesByGenre
        </div>
    );
};

export {MoviesByGenre};