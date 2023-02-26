import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Animated, MovieInfo} from "../../components";

const MovieDetailsPage = () => {

    let {id} = useParams();
    let dispatch = useDispatch();
    let {movieDetails} = useSelector(({movies})=>movies)

    useEffect(()=>{
        dispatch(movieActions.getById({id}))
    }, [dispatch, id])
    return (
        <Animated>
        <div>
            {movieDetails &&<MovieInfo movieDetails={movieDetails}/>}
        </div>
        </Animated>
    );
};

export {MovieDetailsPage};