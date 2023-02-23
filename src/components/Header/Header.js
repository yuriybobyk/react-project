import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import {User} from "../User/User";
import {useState} from "react";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import {useNavigate} from "react-router-dom";



const Header = () => {

    const [user, setUser]= useState(false)

    const navigate = useNavigate();

    return (
        <div className={'header'}>
            <div className={'left'}>
                <div className={'home'} onClick={()=>navigate('/movies')}>
                    <HomeIcon fontSize={"large"}/>
                </div>
            </div>
            <div className={'right'}>
                <div className={'search'}>
                    <input type={"search"}/>
                    <div>
                        <SearchIcon fontSize={"large"}/>
                    </div>
                </div>
                <div  onClick={()=> setUser((prev) => !prev)} >
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