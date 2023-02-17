import '../styles/WelcomePage.css'
import {FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";

const WelcomePage = () => {
    return (
        <div className={'container'}>
            <h1>Welcome</h1>
           <div className={'box'}>
               <div className={'top'}>
                   <div>
                    <FaInstagram/>
                   </div>
                   <div>
                       <FaTelegram/>
                   </div>
                   <div>
                       <FaTwitter/>
                   </div>
                   <div>
                       <FaGithub/>
                   </div>
               </div>
           </div>
        </div>
    );
};

export {WelcomePage};