import './Header.scss';
import './Header-media.scss';

import twitter from '../../resources/icons/header/twitter.svg';
import logo from '../../resources/icons/header/logo.png';
import telegram from '../../resources/icons/header/telegram.svg';

import { useDispatch, useSelector } from 'react-redux';
import { openMenu,openConnectModal } from '../../store/mainSlice';



export const shortName = (name) => {
    if(name.length > 14){
        return name.substring(0,14) + '...'
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
                <li className="header__nav_item"><a href="#" className="header__nav_link">Home</a></li>
                <li className="header__nav_item"><a href="#" className="header__nav_link">About WS</a></li>
                <li className="header__nav_item"><a href="#" className="header__nav_link">Artist</a></li>
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
                <div className="connect__btn" onClick={() => dispatch(openConnectModal())}>{userAcc !== ''? shortName(userAcc) : 'Connect Wallet'}</div>
            </div>
        </header>
    )
}
export default Header