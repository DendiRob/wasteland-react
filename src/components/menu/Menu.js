import './Menu.scss';
import './Menu-media.scss';

import close from '../../resources/icons/header/close.svg';
import logo from '../../resources/icons/header/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../store/mainSlice';


const Menu = () => {

    const isMenuOpen = useSelector(store => store.mainStates.isMenuOpen);
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
                                <li className="menu__nav_item"><a href="#">Home</a></li>
                                <li className="menu__nav_item"><a href="#">Old collection</a></li>
                                <li className="menu__nav_item"><a href="#">About</a></li>
                            </ul>
                        </nav>
                        <button className='menu__btn'>connect wallet</button>
                    </div>
            </div>
        </>
    )
}
export default Menu