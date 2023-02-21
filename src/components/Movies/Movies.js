import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Movies.css'


const Movies = () => {

    const dispatch = useDispatch();

    const {movies, totalPages, page} = useSelector(({movies}) => movies)

    console.log(page)

    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
        // setParams({page})
    }, [dispatch, query])

    return (
        <div className={'movies'}>
            <h2 className={'title'}>Movies</h2>
            <div className={'content'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={'arrows'}>
            <div>
                <ArrowBackIosNewIcon disabled={page => 1} onClick={() => setQuery(query => ({
                    page: +query.get('page') - 1}))}/>
            </div>
            <div>
                <ArrowForwardIosIcon disabled={page => 500} onClick={() => setQuery(query => ({
                    page: +query.get('page') + 1}))}/>
            </div>
            </div>
        </div>
    );
};

export {Movies};