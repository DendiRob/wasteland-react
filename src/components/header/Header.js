import './Header.scss';
import './Header-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import logo from '../../resources/icons/header/logo.png';
import telegram from '../../resources/icons/header/telegram.svg';

import { useDispatch } from 'react-redux';
import { openMenu,openConnectModal } from '../../store/mainSlice';




const Header = () => {

    const dispatch = useDispatch();


    return(
        <header className="header">
            <img src={logo} alt="logo" className="header__logo"/>
            <ul className="header__nav">
                <li className="header__nav_item"><a href="#" className="header__nav_link">Home</a></li>
                <li className="header__nav_item"><a href="#" className="header__nav_link">About</a></li>
                <li className="header__nav_item"><a href="#" className="header__nav_link">About Artist</a></li>
                <li className="header__nav_item"><a href="#" className="header__nav_link">WW</a></li>
            </ul>
            <div className="header__nav_connect-wrapper">
                <a href="#" className="connect__social">
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="#" className="connect__social">
                    <img src={telegram} alt="telegram"/>
                </a>
                <div className="connect__burger" onClick={() => dispatch(openMenu())}>
                    <div className="connect__burger_item"></div>
                    <div className="connect__burger_item"></div>
                </div>
                <div className="connect__btn" onClick={() => dispatch(openConnectModal())}>Connect Wallet</div>
            </div>
        </header>
    )
}
export default Header