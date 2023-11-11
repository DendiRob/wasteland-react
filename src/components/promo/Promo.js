import Header from '../header/Header';

import './Promo.scss';
import './Promo-media.scss';

import promoGirl from '../../resources/icons/promo/promo-girl.png'

const Promo = () => {
    return (
        <div className="promo">
                    <div className="content-wrapper">
                        <Header />
                        <div className="promo__mainContent">
                            <div className="promo__sign">New nft collection</div>
                            <h1 className="promo__title">Wasteland Sirens</h1>
                            <h1 className="promo__title_mobile">Wasteland Girlfriends</h1>
                            <img src={promoGirl} alt="promo girl" className="promo__girl" />
                            <div className="promo__btn-wrapper">
                                <div className="promo__girl_blur"></div>
                                <div className="promo__amountOfCollection">A handmade collection of 1,074 unique NFTs.</div>
                                <button className="promo__btn">Mint</button>
                            </div>
                        </div>
                    </div>
                    <div className="promo__paper"></div>
            </div>
    )
}
export default Promo