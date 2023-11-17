import './NftModal.scss';
import './NftModal-media.scss';

import PartConf from '../../configs/particlesConfig.json';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import girlForExample from '../../resources/img/nft/girlexample.png';
import flowers from '../../resources/icons/nft/flowers.svg';
import { useDispatch } from 'react-redux';
import { closeNftModal } from '../../store/mainSlice';


const NftModal = () => {

    const dispatch = useDispatch()

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
    console.log(container);
    };
  

    return( 
        <div className="nftModal">
            <div className="nftModal__wrapper">
                <img src={girlForExample} alt="nft" className="nftModal__img" />
                <div className="nftModal__ready">
                    <div className="nftModal__ready_title">Your NFT is ready</div>
                    <img src={flowers} alt="flowers" className="nftModal__ready_flowers" />
                </div>
                <div className="nftModal__descr">NFT will reach your wallet in a few minutes</div>
                <button className='nftModal__btn' onClick={() => dispatch(closeNftModal())}>ok</button>
            </div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={PartConf}
            />
        </div>
    )
}
export default NftModal