import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import {FaGithub, FaInstagram, FaTelegram, FaTwitter} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer_content'}>
                <div className={'tv'}><LiveTvOutlinedIcon fontSize={"large"}/></div>
                <div className={'signature'}>© 2023 Yurii Bobyk, Inc.</div>
                <div className={'icons'}>
                    <a href={'https://www.instagram.com/yurii__bobyk_/?igshid=NDk5N2NlZjQ%3D'} target={'_blank'} rel="noreferrer">
                        <FaInstagram color={"var(--text-secondary)"} size="30px"/>
                    </a>
                    <a href={'https://t.me/yura_bobyk'} target={'_blank'} rel="noreferrer">
                        <FaTelegram color={"var(--text-secondary)"} size="30px"/>
                    </a>
                    <a href={'https://twitter.com/YuriiBobyk?t=qv-YnNhOBA6gLlxdyoetJA&s=35'} target={'_blank'} rel="noreferrer">
                        <FaTwitter color={"var(--text-secondary)"} size="30px"/>
                    </a>
                    <a href={'https://github.com/yuriybobyk'} target={'_blank'} rel="noreferrer">
                        <FaGithub color={"var(--text-secondary)"} size="30px"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export {Footer};