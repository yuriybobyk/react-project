import '../styles/WelcomePage.css'
import {FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import {Switch} from "@mui/material";
import {useNavigate} from "react-router-dom";
import useLocalStorage from "use-local-storage";
import {Animated} from "../../components";

const WelcomePage = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = ()=>{
        const newTheme = theme === 'light'? 'dark' : 'light';
        setTheme(newTheme)
    }

    const navigate = useNavigate()
    return (
        <Animated>
        <div className={'container'} data-theme={theme}>
            <h1>Welcome</h1>
           <div className={'box'}>
               <div className={'top'}>
                   <a href={'https://www.instagram.com/yurii__bobyk_/?igshid=NDk5N2NlZjQ%3D'}>
                    <FaInstagram size="30px"/>
                   </a>
                   <a href={'https://t.me/yura_bobyk'}>
                       <FaTelegram size="30px"/>
                   </a>
                   <a href={'https://twitter.com/YuriiBobyk?t=qv-YnNhOBA6gLlxdyoetJA&s=35'}>
                       <FaTwitter size="30px"/>
                   </a>
                   <a href={'https://github.com/yuriybobyk'}>
                       <FaGithub size="30px"/>
                   </a>
               </div>
               <div className={'center'}>
               <button onClick={()=>navigate('/movies')} className={'button'}>Get Started!</button>
               </div>
               <div className={'signature'}>© 2023 Yurii Bobyk, Inc. <Switch onClick={switchTheme}/></div>
           </div>
        </div>
        </Animated>
    );
};

export {WelcomePage};