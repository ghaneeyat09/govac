import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import BodyContent from './BodyContent';
//import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
//import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Nav from "./Nav";

const Body =({changeStat}) => {
   
     const handleDragStart = (e) => e.preventDefault();
    /*const renderNextButton = ({ isDisabled }) => {
        return <ArrowForwardIosIcon className="arrowF" style={{ position: "absolute", right: "50px", top: "50%", backgroundColor: "#f5bc02e5", width: "30px", height: "30px", textAlign: "center", padding: "5px", borderRadius: "50%"}} />
      };
    
      const renderPrevButton = ({ isDisabled }) => {
        return <ArrowBackIosIcon className="arrowB" style={{ position: "absolute", left: "50px", top: "50%", backgroundColor: "#f5bc02e5", width: "30px", height: "30px", textAlign: "center", padding: "5px 0 5px 10px", borderRadius: "50%"}} />
      };
    */
    return(
        <div>
            <AliceCarousel autoPlay autoPlayInterval="20000" infinite mouseTracking animationType='fadeout' disableButtonsControls animationEasingFunction="ease-in-out">
            <img src="./assets/goImg4.jpeg" className="sliderimg" alt="" onDragStart={handleDragStart}/>
            <img src="./assets/goimg13.jpeg" className="sliderimg" alt="" onDragStart={handleDragStart}/>
            <img src="./assets/goImg14.jpeg" className="sliderimg" alt="" onDragStart={handleDragStart}/>
            <img src="./assets/goImg16.jpeg" className="sliderimg" alt="" onDragStart={handleDragStart}/>
            <img src="./assets/goImg15.jpeg" className="sliderimg" alt="" onDragStart={handleDragStart}/>
            </AliceCarousel>
            <Nav changeStat={changeStat}/>
            <BodyContent />
        </div>
    )
}
export default Body;