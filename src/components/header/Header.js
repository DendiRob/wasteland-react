import './Header.scss';
import './Header-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import logo from '../../resources/icons/header/logo.png';
import telegram from '../../resources/icons/header/telegram.svg';

import { useDispatch, useSelector } from 'react-redux';
import { openMenu,openConnectModal } from '../../store/mainSlice';

import { Link } from "react-scroll";



export const shortName = (name) => {
    if(name.length > 14){
        return name.substring(0,6) + '...' + name.substr(name.length - 6);
    }else {
        return name
    }
}

const Header = () => {

    const dispatch = useDispatch();
    const { userAcc } = useSelector(store => store.mainStates)


    return(
        <header className="header">
            <img src={logo} alt="logo" className="header__logo"/>
            <ul className="header__nav">
                <li className="header__nav_item">
                    <Link 
                    to="promoScroll" 
                    smooth={true}
                    duration={700} 
                    className="header__nav_link"
                    >Home</Link>
                </li>
                <li className="header__nav_item">
                    <Link 
                    to="aboutwsScroll" 
                    smooth={true}
                    duration={700} 
                    className="header__nav_link"
                    >About WS</Link>
                </li>
                <li className="header__nav_item">
                    <Link 
                    to="aboutartistScroll" 
                    smooth={true}
                    duration={700} 
                    className="header__nav_link"
                    >Artist</Link>
                </li>
                <li className="header__nav_item" >
                    <Link 
                    to="posterScroll" 
                    smooth={true}
                    duration={700}
                    className="header__nav_link"
                    >WW</Link>
                </li>
            </ul>
            <div className="header__nav_connect-wrapper">
                <a href="https://x.com/BingoBongo_ape?t=ZzRWMwbxC6SGNuIavxy3CA&s=09" rel="noopener noreferrer" target='_blank' className="connect__social">
                    <img src={twitter} alt="twitter"/>
                </a>
                <a href="https://t.me/BingoBongoStudio1" rel="noopener noreferrer" target='_blank' className="connect__social">
                    <img src={telegram} alt="telegram"/>
                </a>
                <div className="connect__burger" onClick={() => dispatch(openMenu())}>
                    <div className="connect__burger_item"></div>
                    <div className="connect__burger_item"></div>
                </div>
                <div className="connect__btn" onClick={() => {
                    dispatch(openConnectModal())
                    }}>{userAcc !== ''? shortName(userAcc) : 'Connect Wallet'}</div>
            </div>
        </header>
    )
}
export default Header