import { useDispatch } from 'react-redux';


import './Footer.scss';
import './Footer-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import telegram from '../../resources/icons/header/telegram.svg';
import logo from '../../resources/icons/header/logo.png';


const Footer = () => {

    const dispatch = useDispatch()

    return(
        <footer className="footer">
            <div className="footer__content">
                <img src={logo} alt="logo" className="content__logo" />
                <ul className="content__nav">
                    <li className="content__nav_item"><a href="#promo" className="header__nav_link">Home</a></li>
                    <li className="content__nav_item" ><a href="#aboutws" className="header__nav_link">About WS</a></li>
                    <li className="content__nav_item"><a href="#aboutartist" className="header__nav_link">Artist</a></li>
                    <li className="content__nav_item" ><a href="#poster" className="header__nav_link">WW</a></li>
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