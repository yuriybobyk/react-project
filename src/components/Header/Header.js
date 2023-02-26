import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import {User} from "../User/User";
import {useState} from "react";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {NavLink, useNavigate} from "react-router-dom";
import {Genres} from "../Genres/Genres";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";



const Header = () => {

    const [user, setUser]= useState(false)

    const [genres, setGenres] = useState(false)

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <div className={'header'}>
            <div className={'left'}>
                <div className={'home'} onClick={()=>navigate('/')}>
                    <HomeIcon fontSize={"large"}/>
                </div>
            </div>
            <div className={'main'}>
                <div >
                    <div className={'genre_header'} onClick={()=> setGenres((prev)=> !prev)}>
                        <div className={'genre_block'} >
                        GENRES
                        </div>
                        {genres && <Genres/>}
                    </div>
                </div>
                <div className={'search_block'}>
                    <NavLink to={'search'} onClick={()=> dispatch(movieActions.search())}>SEARCH</NavLink>
                </div>
            </div>
            <div className={'toggle_text'}>
                Toggle to change theme >
            </div>
            <div className={'right'}>
                <div className={'user_budge'}  onClick={()=> setUser((prev) => !prev)} >
                    <div className={'user_icon'}>
                    <PermContactCalendarIcon fontSize={"large"}/>
                    </div>
                    {user && <User/>}
                </div>
            </div>
        </div>
    );
};

export {Header};