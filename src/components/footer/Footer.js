import './Footer.scss';
import './Footer-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import telegram from '../../resources/icons/header/telegram.svg';
import logo from '../../resources/icons/header/logo.png'


const Footer = () => {
    return(
        <footer class="footer">
            <div class="footer__content">
                <img src={logo} alt="logo" class="content__logo" />
                <ul class="content__nav">
                    <li class="content__nav_item"><a href="#">Home</a></li>
                    <li class="content__nav_item"><a href="#">Old collection</a></li>
                    <li class="content__nav_item"><a href="#">About</a></li>
                </ul>
                <div class="content__social">
                    <div class="content__social_title">We are on social media</div>
                    <div class="content__social_wrapper">
                        <a href="#" class="content__social_link">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#" class="content__social_link">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </div>
                    <button class="content__social_connect">Connect Wallet</button>
                </div>
            </div>
            <div class="footer__right">Copyright © 2023. All rights reserved</div>
        </footer>
    )
}
export default Footer