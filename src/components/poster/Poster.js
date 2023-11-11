import { useState, useEffect } from 'react';

import './Poster.scss';
import './Poster-media.scss';

import warAndGirld from '../../resources/icons/poster/warlord-girlfriend.png'

const Poster = () => {


    const [isTextVisible, setIsTextVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIsTextVisible((prev) => !prev);
        }, 5000);
    
        return () => clearInterval(intervalId); // Очистка интервала при размонтировании компонента
      }, []);

    return( 
        <div className="poster">
            <div className="poster__banner">
                <a href="#" className="poster__banner_link">
                    {isTextVisible ? (
                        <img className="poster__banner_img" src={warAndGirld} alt="bannertext"/>
                    ) : (
                        <div className="poster__banner_btn">buy now</div>
                    )}
                </a>
            </div>
        </div>
    )
}
export default Poster