import './DrawingFor.scss';
import './DrawingFor-media.scss';

import firstLogo from '../../resources/icons/drawingFor/first-logo.png';
import secondLogo from '../../resources/icons/drawingFor/second-logo.png';
import thirdLogo from '../../resources/icons/drawingFor/third-logo.png';


const DrawingFor = () => {
    return(
        <div className="drawingFor">
            <div className="drawingFor__title">drawing for</div>
            <div className="drawingFor__board">
                <img src={firstLogo} alt="firstlogo" className="drawingFor__board_item"/>
                <div className="drawingFor__board_item drawingFor__board_item-point"></div>
                <img src={secondLogo} alt="secondlogo" className="drawingFor__board_item"/>
                <div className="drawingFor__board_item drawingFor__board_item-point"></div>
                <img src={thirdLogo} alt="threelogo" className="drawingFor__board_item drawingFor__board_item-third"/>
            </div>
        </div>
    )
}
export default DrawingFor