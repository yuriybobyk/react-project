import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {MovieListCard} from "../MovieListCard/MovieListCard";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './MoviesList.css'
import Button from '@mui/material-next/Button';




const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies, page} = useSelector(({movies}) => movies)


    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])


    return (
        <div className={'movies'}>
            <h2 className={'title'}>Movies</h2>
            <div className={'content'}>
                {movies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={'arrows'}>
            <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={'arrow'}>
                <Button disabled={page === 1} >
                    <ArrowBackIosNewIcon  fontSize={"large"} onClick={()=>{setQuery(query=>({page:+query.get('page') - 1}))}}/>
                </Button>
            </div>
            <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={'arrow'}>
                <Button  disabled={page === 500} >
                    <ArrowForwardIosIcon   fontSize={"large"} onClick={()=>{setQuery(query=>({page: +query.get('page') +1}))}}/>
                </Button>
            </div>
            </div>
        </div>

    );
};

export {MoviesList};