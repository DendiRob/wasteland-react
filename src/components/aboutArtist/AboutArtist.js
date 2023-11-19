import artistStamp from '../../resources/icons/aboutArtist/stamp.png'

import './AboutArtist.scss';
import './AboutArtist-media.scss';

const AboutArtist = () => {
    return(
        <div className="aboutArtist">
                    <div className="aboutArtist__textBlock">
                        <div className="aboutArtist__linkBlock" name='aboutartistScroll'></div>
                        <p>
                            <span>About artist</span>
                            Hi, my name is Mac aka BingoBobgoApe. I am a digital artist and have been painting NFT for a few years now. 
                        </p>
                    </div>
                    <div className="aboutArtist__textBlock aboutArtist__textBlock_grey">
                        <p>
                            In my artistic journey, I strive to create the best art for you, my valued friends. My passion for art and dedication to your expectations inspire me to constantly improve and create works that bring joy and inspiration. 
                        </p>
                    </div>
                    <img src={artistStamp} alt="stamp" className="aboutArtist__stamp"/>
                </div>
    )
}
export default AboutArtist