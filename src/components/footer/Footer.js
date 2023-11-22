

import './Footer.scss';
import './Footer-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import telegram from '../../resources/icons/header/telegram.svg';
import logo from '../../resources/icons/header/logo.png';

import { Link } from "react-scroll";



const Footer = () => {


    return(
        <footer className="footer">
            <div className="footer__content">
                <img src={logo} alt="logo" className="content__logo" />
                <ul className="content__nav">
                    <li className="content__nav_item">
                        <Link
                        to="promoScroll" 
                        smooth={true}
                        duration={700} 
                        className="header__nav_link"
                        >Home</Link>

                    </li>
                    <li className="content__nav_item">
                        <Link 
                        to="aboutwsScroll" 
                        smooth={true}
                        duration={700} 
                        className="header__nav_link"
                        >About WS</Link>
                    </li>
                    <li className="content__nav_item">
                        <Link
                        to="aboutartistScroll" 
                        smooth={true}
                        duration={700} 
                        className="header__nav_link"
                        >Artist</Link>
                    </li>
                    <li className="content__nav_item">
                        <Link
                        to="posterScroll" 
                        smooth={true}
                        duration={700}
                        className="header__nav_link"
                        >WW</Link>
                    </li>
                </ul>
                <div className="content__social">
                    <div className="content__social_title">We are on social media</div>
                    <div className="content__social_wrapper">
                        <a href="https://x.com/BingoBongo_ape?t=ZzRWMwbxC6SGNuIavxy3CA&s=09" rel="noopener noreferrer" target='_blank' className="content__social_link">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="https://t.me/BingoBongoStudio1" rel="noopener noreferrer" target='_blank' className="content__social_link">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__right">Copyright © 2023. All rights reserved</div>
        </footer>
    )
}
export default Footer