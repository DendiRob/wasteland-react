import './Blackpart.scss';
import './App.scss';
import './App-media.scss';

import { useSelector } from 'react-redux';

import Market from '../market/Market';
import AboutArtist from '../aboutArtist/AboutArtist';
import Promo from '../promo/Promo';
import About from '../about/About';
import DrawingFor from '../drawingFor/DrawingFor';
import PickYour from '../pickYour/PickYour';
import Poster from '../poster/Poster';
import Footer from '../footer/Footer';
import Menu from '../menu/Menu';
import Header from '../header/Header';
import ConnectModal from '../connectModal/ConnectModal';


function App() {

  const isConnectModalOpen = useSelector(store => store.mainStates.isConnectModalOpen);


  return (
    <>
      {isConnectModalOpen ? <ConnectModal /> : '  '}
      <Menu />
      <div className="container">
      <Header />
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
