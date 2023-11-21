import './NftModal.scss';
import './NftModal-media.scss';

import PartConf from '../../configs/particlesConfig.json';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import flowers from '../../resources/icons/nft/flowers.svg';
import { useDispatch, useSelector } from 'react-redux';
import { closeNftModal } from '../../store/mainSlice';
import { useState, useEffect } from 'react';


const NftModal = () => {

    const dispatch = useDispatch();
    const {receivedNft} = useSelector(store => store.mainStates);

    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageNft] = useState(new Image());


    const particlesInit = async (main) => {
        await loadFull(main);
    };
    const particlesLoaded = (container) => {
    };

    const imageUrl = `https://apedao.mypinata.cloud/ipfs/QmNbZSywnbrf4HSAzDX1jvdvwCkHKgRACChZXF4j1t3X4S/${receivedNft}.png`
    
    useEffect(() => {
        
        imageNft.src = imageUrl;
        imageNft.onload = () => setImageLoaded(true);

        return () => {
        imageNft.onload = null;
        };
      }, [imageUrl,imageNft]);

    return( 
        <div className="nftModal" style={{
            display: imageLoaded? 'flex' : 'none'
        }}>
            <div className="nftModal__wrapper">
                <img src={imageNft.src} alt="nft" className="nftModal__img" />
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