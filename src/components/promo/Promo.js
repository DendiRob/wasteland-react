import { ethers } from 'ethers';

import './Promo.scss';
import './Promo-media.scss';

import promoGirl from '../../resources/icons/promo/promo-girl.png';
import contarctData from '../../collection.json';
import { useDispatch, useSelector } from 'react-redux';
import { openNftModal } from '../../store/mainSlice';


const Promo = () => {

    const { userAcc } = useSelector(store => store.mainStates);
    const dispatch = useDispatch()

    const onMint = async () => {
        if(userAcc !== ''){
            try {
                let provider = new ethers.providers.Web3Provider(window.ethereum);
                let signer = provider.getSigner();
                let contract = new ethers.Contract(contarctData.address, contarctData.abi, signer);

                await contract.connect(signer).mint({value: await contract.PRICE()});
                const tokenID = await contract.currentTokenId()
                const photoNumber = parseInt(tokenID._hex, 16)

                dispatch(openNftModal(photoNumber))
            } catch (error) {
                throw Error('something went wrong')
            }
        }   
    }

    return (
        <div className="promo" name='promoScroll'>
                    <div className="content-wrapper">
                        <div className="promo__mainContent">
                            <div className="promo__sign">New nft collection</div>
                            <h1 className="promo__title">Wasteland Sirens</h1>
                            <h1 className="promo__title_mobile">Wasteland Girlfriends</h1>
                            <img src={promoGirl} alt="promo girl" className="promo__girl" />
                            <div className="promo__btn-wrapper">
                                <div className="promo__girl_blur"></div>
                                <div className="promo__amountOfCollection">A handmade collection of 1,074 unique NFTs.</div>
                                <button className="promo__btn" onClick={onMint}>Mint</button>
                            </div>
                        </div>
                    </div>
                    {/* <div className="promo__paper"></div> */}
            </div>
    )
}
export default Promo