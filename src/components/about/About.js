import './About.scss';
import './About-media.scss';

import aboutGirl from '../../resources/icons/about/about-girl.png';
import light from '../../resources/img/about/lights.png'

const About = () => {
    return(
        <div className="about">
            <img className='about__lights' src={light} alt="light" />
            <div className="about__textBlock about__textBlock_one">
                <div className="about__linkBlock" name='aboutwsScroll'></div>
                <h2 className="about__subtitle">About</h2>
                <div className="about__descrTitle">Wasteland Sirens</div>
                <p>
                        is a collection of 1,074 generative portraits created by artist BingoBongo, with carefully detailed elements.
                </p>
            </div>
            <div className="about__textBlock about__textBlock_two">
                <p>Mysterious girls, exploring the wastelands, representing hope and danger in one person.</p>
            </div>
            <div className="about-wrapper">
                <img className="about__girl" src={aboutGirl} alt="about-girl" />
                <div className="about__textBlock about__textBlock_three">
                    <p>
                        <span>*</span>Having a pair of Wasteland Warlords and Wasteland Sirens will allow you to get unique NFTs
                    </p>
                </div>
            </div>
        </div>
    )
}
export default About