import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const Header = () => {


    return (
        <div className={'header'}>
            <div className={'left'}>
                <div className={'home'}>
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
                <div>
                    <PersonPinIcon fontSize={"large"}/>
                </div>
            </div>
        </div>
    );
};

export {Header};