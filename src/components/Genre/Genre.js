import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {genreActions} from "../../redux/slices/genreSlice";

const Genre = ({genre}) => {

    const {id, name} = genre;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getMoviesByGenre = ()=>{
        dispatch(genreActions.getMoviesByGenreId({id}))
        navigate(`/moviesByGenre?genreId=${id}`)
    }

    return (
        <div>
            <div onClick={getMoviesByGenre}>{name}</div>
        </div>
    );
};

export {Genre};