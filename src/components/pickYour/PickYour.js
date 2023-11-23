import './PickYour.scss';
import './PickYour-media.scss';


const PickYour = () => {
    return(
        <div className="pickYour">
            <p className="pickYour__descr">
                Pick your <span>Warlord</span> and <br /><span>Sirens</span> right now!
            </p>
            <div className="pickYour__btns">
                <button className="pickYour__btns_btn pickYour__btns_left">Wasteland Sirens</button>
                <button className="pickYour__btns_btn pickYour__btns_right">Wasteland warlords</button>
            </div>
        </div>
    )
}
export default PickYour