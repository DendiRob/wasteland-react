import './Menu.scss';
import './Menu-media.scss';

import close from '../../resources/icons/header/close.svg';
import logo from '../../resources/icons/header/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { closeMenu, openConnectModal } from '../../store/mainSlice';
import { shortName } from '../header/Header';
import { Link } from "react-scroll";



const Menu = () => {

    const  {isMenuOpen, userAcc} = useSelector(store => store.mainStates);
    const dispatch = useDispatch()
    
    return(
        <>
            <div className={isMenuOpen? "menu-wrapper menu-wrapper_active": "menu-wrapper"}>
                    <div className="menu-overlay" onClick={() => dispatch(closeMenu())} >
                    </div>
                        <div className={isMenuOpen? 'menu menu__active': 'menu'} >
                        <img className='menu__close' onClick={(e) => {
                            dispatch(closeMenu())
                            e.stopPropagation()
                            }
                        } src={close} alt="close" />
                        <img className='menu__logo' src={logo} alt="logo" />
                        <nav>
                            <ul className='menu__nav'>
                                <li className="menu__nav_item">
                                    <Link 
                                    onClick={() => dispatch(closeMenu())}
                                    to="promoScroll" 
                                    smooth={true}
                                    duration={700} 
                                    className="header__nav_link"
                                    >Home</Link>

                                </li>
                                <li className="menu__nav_item">
                                    <Link 
                                    onClick={() => dispatch(closeMenu())}
                                    to="aboutwsScroll" 
                                    smooth={true}
                                    duration={700} 
                                    className="header__nav_link"
                                    >About WS</Link>
                                </li>
                                <li className="menu__nav_item">
                                    <Link 
                                    onClick={() => dispatch(closeMenu())}
                                    to="aboutartistScroll" 
                                    smooth={true}
                                    duration={700} 
                                    className="header__nav_link"
                                    >Artist</Link>
                                </li>
                                <li className="menu__nav_item">
                                    <Link 
                                    onClick={() => dispatch(closeMenu())}
                                    to="posterScroll" 
                                    smooth={true}
                                    duration={700}
                                    className="header__nav_link"
                                    >WW</Link>
                                </li>
                            </ul>
                        </nav>
                        <button className="menu__btn" onClick={() => {
                            dispatch(openConnectModal())
                            dispatch(closeMenu())
                        }}>{userAcc !== ''? shortName(userAcc) : 'Connect Wallet'}</button>
                    </div>
            </div>
        </>
    )
}
export default Menu