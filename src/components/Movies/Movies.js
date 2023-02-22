import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Movies.css'
import Button from '@mui/material-next/Button';




const Movies = () => {

    const dispatch = useDispatch();

    const {movies, page} = useSelector(({movies}) => movies)

    console.log(page)

    const [query, setQuery] = useSearchParams({page: '1'});


    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [dispatch, query])


    return (
        <div className={'movies'}>
            <h2 className={'title'}>Movies</h2>
            <div className={'content'}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div className={'arrows'}>
            <div>
                <Button disabled={page === 1} >
                    <ArrowBackIosNewIcon onClick={()=>{setQuery(query=>({page:+query.get('page') - 1}))}}/>
                </Button>
            </div>
            <div>
                <Button disabled={page === 500}  >
                    <ArrowForwardIosIcon onClick={()=>{setQuery(query=>({page: +query.get('page') +1}))}}/>
                </Button>
            </div>
            </div>
        </div>

    );
};

export {Movies};