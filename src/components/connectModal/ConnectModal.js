import './ConnectModal.scss';
import './ConnectModal-media.scss';

import metamask from '../../resources/icons/connectModal/Metamask.svg';
import close from '../../resources/icons/connectModal/close.svg';

import { closeConnectModal } from '../../store/mainSlice';
import { useDispatch } from 'react-redux';


const ConnectModal = () => {

    const dispatch = useDispatch()

    return(
<div className="connectModal__wrapper" onClick={() => dispatch(closeConnectModal())}>
            <div className="connectModal" onClick={(e) => e.stopPropagation() }>
                <img className='connectModal__close' src={close} alt="closer" onClick={(e) => dispatch(closeConnectModal())} />
                <div className="connectModal__title">Connect wallet</div>   
                <div className="connectModal__wallet">
                    <img src={metamask} alt="metamask" className="connectModal__wallet_icon" />
                    <div className="connectModal__wallet_title">Metamask</div>
                </div>
                <div className="connectModal__rights">
                        <div className="connectModal__rights_title">Privacy</div>
                        <div className="connectModal__rights_title">Terms</div>
                </div>
            </div>
        </div>
    )
}
export default ConnectModal
