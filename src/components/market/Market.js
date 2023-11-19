import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import girl1 from '../../resources/icons/market/girl1.png';
import girl2 from '../../resources/icons/market/girl2.png';
import girl3 from '../../resources/icons/market/girl3.png';
import girl4 from '../../resources/icons/market/girl4.png';
import girl5 from '../../resources/icons/market/girl5.png';
import girl6 from '../../resources/icons/market/girl6.png';
import girl7 from '../../resources/icons/market/girl7.png';
import girl8 from '../../resources/icons/market/girl8.png';
import girl9 from '../../resources/icons/market/girl9.png';
import girl10 from '../../resources/icons/market/girl10.png';



import './Market.scss';
import './Market-media.scss';

const Market = () => {
    
    const girls = [
        girl1,
        girl2,
        girl3,
        girl4,
        girl5,
        girl6,
        girl7,
        girl8,
        girl9,
        girl10,
    ]

    return(
        <div className="market">
            <h2 className="market__subtitle">The market</h2>
            <div className="market__slider">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        speed={5000}
                        autoplay={
                            {
                                delay: 1,
                                disableOnInteraction: true
                            }
                        }
                        breakpoints={
                            {
                                625: {
                                    spaceBetween: 20,
                                    slidesPerView: 2, 
                                },
                                900: {
                                    spaceBetween: 50,
                                    slidesPerView: 3,
                                }
                            }
                        }
                        modules={[Autoplay]}
                        className="mySwiper"
                        >
                        {girls.map((photo,index) => {
                            return(
                                <SwiperSlide key={index} className='market__slide'>
                                    <img src={photo} alt="marketslide" className="market__slide_img" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
            </div>
        </div>
    )
}
export default Market