import './ConnectModal.scss';
import './ConnectModal-media.scss';

import metamask from '../../resources/icons/connectModal/Metamask.svg';
import close from '../../resources/icons/connectModal/close.svg';

import { closeConnectModal, connectToAcc, logOut } from '../../store/mainSlice';
import { useDispatch, useSelector } from 'react-redux';


const ConnectModal = () => {

    const dispatch = useDispatch()
    const {userAcc} = useSelector(store => store.mainStates);



    return(
<div className="connectModal__wrapper" onClick={() => dispatch(closeConnectModal())}>
            <div className="connectModal" onClick={(e) => e.stopPropagation() }>
                <img className='connectModal__close' src={close} alt="closer" onClick={(e) => dispatch(closeConnectModal())} />
                <div className="connectModal__title">Connect wallet</div>   
                {userAcc !== '' ?
                        <div className='connectModal__logOut' onClick={() => dispatch(logOut())}>Log out</div>
                        :
                        <div className="connectModal__wallet" onClick={() => dispatch(connectToAcc())}>
                            <img src={metamask} alt="metamask" className="connectModal__wallet_icon" />
                            <div className="connectModal__wallet_title">Metamask</div>
                        </div>
                }
            </div>
        </div>
    )
}
export default ConnectModal
