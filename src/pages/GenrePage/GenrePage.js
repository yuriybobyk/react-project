import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MovieListCard} from "../../components";
import {movieActions} from "../../redux";
import '../styles/GenrePage.css'
import Button from "@mui/material-next/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const GenrePage = () => {

    const {page, genres, movies} = useSelector(({movies}) => movies);
    const dispatch = useDispatch();
    const {genre} = useParams();
    const {state} = useLocation();
    const [id, setId] = useState(null);
    const [query, setQuery] = useSearchParams({page})

    useEffect(() => {
        if (state) {
            setId(state);
        } else {
            if (genres.length) {
                const genresName = genres.find(genreName => genreName.name.toLowerCase() === genre);
                setId(genresName.id);
            }
        }
    }, [state, setId, genre, genres]);

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieByGenre({id, page: query.get('page') || 1}))
        }
    }, [id, page, dispatch, query])

    return (
        <div className={'genre_page'}>
            <h2 className={'title'}>{genre}</h2>
            <div className={'content'}>
                {movies && movies.map(movie => <MovieListCard key={movie.id} movie={movie}/> )}
            </div>
            <div className={'arrows'}>
                <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={'arrow'}>
                    <Button  disabled={page === 1} >
                        <ArrowBackIosNewIcon fontSize={"large"} onClick={()=>{setQuery(query=>({page:+query.get('page') - 1}))}} />
                    </Button>
                </div>
                <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={'arrow'}>
                    <Button disabled={page === 500} >
                        <ArrowForwardIosIcon fontSize={"large"} onClick={()=>{setQuery(query=>({page: +query.get('page') +1}))}}/>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export {GenrePage};