import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {MovieListCard} from "../../components";
import Button from "@mui/material-next/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from '@mui/icons-material/Search';
import '../styles/SearchPage.css'

const SearchPage = () => {

    const dispatch = useDispatch();

    const [search, setSearch] = useState(null);

    const {page, searchResult} = useSelector(({movies}) => movies);

    const [query, setQuery] = useSearchParams({page});

    const ref = useRef();


    const submit = (e)=>{
        e.preventDefault();
        setSearch(ref.current.value);
        dispatch(movieActions.setPage(1));
    }


    useEffect(()=>{
        if (search){
            dispatch(movieActions.getSearchMovies({query: search, page: query.get('page') || 1}))
        }
    }, [search, page, dispatch, query])

    return (
        <div className={'search_page'}>
            <div className={'search_form'}>
                <h2 className={'title'}>Wanna search something?</h2>
                <form className={'form'} onSubmit={(e) => submit(e)}>
                    <input className={'input'} type="text" placeholder={'Search movie'} ref={ref}/>
                    <button className={'search_button'}><SearchIcon/></button>
                </form>
            </div>

            <div className={'search_results'}>
                {searchResult && searchResult.map(result => <MovieListCard key={result.id} movie={result}/>)}
            </div>
            <div className={'arrows'}>
                <div onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={'arrow'}>
                    <Button disabled={page === 1} >
                        <ArrowBackIosNewIcon fontSize={"large"} onClick={()=>{setQuery(query=>({page:+query.get('page') - 1}))}}/>
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

export {SearchPage};