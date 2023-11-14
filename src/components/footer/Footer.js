import { useDispatch } from 'react-redux';


import './Footer.scss';
import './Footer-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import telegram from '../../resources/icons/header/telegram.svg';
import logo from '../../resources/icons/header/logo.png'
import { openConnectModal } from '../../store/mainSlice';


const Footer = () => {

    const dispatch = useDispatch()

    return(
        <footer className="footer">
            <div className="footer__content">
                <img src={logo} alt="logo" className="content__logo" />
                <ul className="content__nav">
                    <li className="content__nav_item"><a href="#">Home</a></li>
                    <li className="content__nav_item"><a href="#">Old collection</a></li>
                    <li className="content__nav_item"><a href="#">About</a></li>
                </ul>
                <div className="content__social">
                    <div className="content__social_title">We are on social media</div>
                    <div className="content__social_wrapper">
                        <a href="#" className="content__social_link">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#" className="content__social_link">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                    <button className="content__social_connect" onClick={() => dispatch(openConnectModal())}>Connect Wallet</button>
                </div>
            </div>
            <div className="footer__right">Copyright © 2023. All rights reserved</div>
        </footer>
    )
}
export default Footer