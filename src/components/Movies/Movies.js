import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {useSearchParams} from "react-router-dom";
import {Movie} from "../Movie/Movie";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Movies = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const {page, totalPages} = useSelector(state => state.movies);
    console.log(page)

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{
        dispatch(movieActions.getMovies({page: query.get('page')}))

    },[dispatch, query])

    return (
        <div>
           <div>{movies.map((movie, index)=><Movie key={index} movie={movie}/>)}</div>
            <div>
                <ArrowBackIosIcon
                onClick={()=>setQuery(query=>({
                    page: +query.get('page') - 1
                }))}/>
            </div>
            <div>
                <ArrowForwardIosIcon
                onClick={()=>setQuery(query=>({
                    page:+query.get('page') +1
                }))}/>
            </div>
        </div>
    );
};

export {Movies};