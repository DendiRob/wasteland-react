import './Blackpart.scss';
import './App.scss';
import './App-media.scss';

import Market from '../market/Market';
import AboutArtist from '../aboutArtist/AboutArtist';
import Promo from '../promo/Promo';
import About from '../about/About';
import DrawingFor from '../drawingFor/DrawingFor';
import PickYour from '../pickYour/PickYour';
import Poster from '../poster/Poster';
import Footer from '../footer/Footer';


function App() {
  return (
    <>
        <div className="container">
            <div className="container__red">
                <Promo />
            </div>
            <div className="blackpart">
                <About />
                <Market />
                <AboutArtist />
                <DrawingFor />
                <PickYour />
                <Poster />
            </div>
            <div className="blackpart__stroke_overlay"></div>
        </div>
        <Footer />
    </>
  );
}

export default App;
