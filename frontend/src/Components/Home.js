import Ribs from "../img/ribsDisplay.jpg"
import Grills from "../img/grill.jpg"
import Steak from "../img/nystrip.jpg"
import Platter from "../img/platter.jpg"

function Home() {
    return ( 
        // give each div a border with different colors to see where each div specifically is
        <div className="">
            <div className="carousel w-full">

                <div id="slide1" className="carousel-item relative w-full">
                    <img src={Ribs} alt="Ribs on the gril" className="w-full object-contain overflow-hidden" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Grills} alt="smoking grill" className="w-full object-contain overflow-hidden" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Steak} alt="medium rare steak" className="w-full object-contain overflow-hidden" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 

                <div id="slide4" className="carousel-item relative w-full">
                    <img src={Platter} alt="Platter of bbq" className="w-full object-contain overflow-hidden" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;