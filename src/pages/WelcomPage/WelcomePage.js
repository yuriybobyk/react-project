import '../styles/WelcomePage.css'
import {FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import {Switch} from "@mui/material";
import {useNavigate} from "react-router-dom";

const WelcomePage = () => {

    const navigate = useNavigate()
    return (
        <div className={'container'}>
            <h1>Welcome</h1>
           <div className={'box'}>
               <div className={'top'}>
                   <a href={'https://www.instagram.com/yurii__bobyk_/?igshid=NDk5N2NlZjQ%3D'}>
                    <FaInstagram size="30px" color="black"/>
                   </a>
                   <a href={'https://t.me/yura_bobyk'}>
                       <FaTelegram size="30px" color="blue"/>
                   </a>
                   <a href={'https://twitter.com/YuriiBobyk?t=qv-YnNhOBA6gLlxdyoetJA&s=35'}>
                       <FaTwitter size="30px" color="#1DA1F2"/>
                   </a>
                   <a href={'https://github.com/yuriybobyk'}>
                       <FaGithub size="30px" color="black"/>
                   </a>
               </div>
               <div className={'center'}>
               <button onClick={()=>navigate('/movies')} className={'button'}>Get Started!</button>
               </div>
               <div className={'signature'}>© 2023 Yurii Bobyk, Inc. <Switch/></div>
           </div>
        </div>
    );
};

export {WelcomePage};