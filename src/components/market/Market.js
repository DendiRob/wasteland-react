import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import girlOne from '../../resources/icons/market/girlone.png'
import girlTwo from '../../resources/icons/market/girltwo.png'
import girlThree from '../../resources/icons/market/girlthree.png'


import './Market.scss';
import './Market-media.scss';

const Market = () => {
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
                        <SwiperSlide className='market__slide'>
                                    <img src={girlOne} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlTwo} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlThree} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlOne} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlTwo} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlThree} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlOne} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlTwo} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlThree} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlOne} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlTwo} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                        <SwiperSlide className='market__slide'>
                                    <img src={girlThree} alt="marketslide" className="market__slide_img" />
                                    <div className="market__slide_footer">
                                        <div className="slideFooter__info">
                                            <div className="slideFooter__info_name">NameGirl</div>
                                            <div className="slideFooter__info_price">price</div>
                                        </div>
                                        <div className="slideFooter__btn">buy</div>
                                    </div>
                        </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    )
}
export default Market