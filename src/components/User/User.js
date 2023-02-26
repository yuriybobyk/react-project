import Face6Icon from '@mui/icons-material/Face6';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const User = () => {
    return (
        <div className={'user'}>
            <div className={'ul'}>
                <div className={'li'}><Face6Icon fontSize={"medium"}/>Yurii</div>
                <div className={'li'}><SettingsIcon fontSize={"medium"}/>Settings</div>
                <div className={'li'}><LogoutIcon fontSize={"medium"}/>Logout</div>
            </div>
        </div>
    );
};

export {User};