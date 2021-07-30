import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Travel from '../components/images/travelslide.jpeg';
import Weather from '../components/images/weatherslide.jpeg';
import Baldur from '../components/images/baldurslide.jpeg';

const Home = () => {


    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <div id='titles'>

            <div className="title">
                <h1 className="title">SOFTWARE DEVELOPER</h1>
            </div>

            <div className="lina">
                <h1 className="lina">Lina Biel</h1>
            </div>

            <div className='carousel'>

                <Slider className='carousel'{...settings}>
                    <div>
                        <img src={Travel} className='image' alt='travel' />
                    </div>
                    <div>
                        <img src={Weather} className='image' alt='weather' />
                    </div>
                    <div>
                        <img src={Baldur} className='image' alt='baldur' />
                    </div>

                </Slider>
            </div>

        </div>
    )
}

export default Home;