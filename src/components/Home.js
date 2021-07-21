import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Travel from '../components/images/travelslide.png';
import Weather from '../components/images/weatherslide.png';
import Baldur from '../components/images/baldurslide.png';

class Home extends Component {

    render() {

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
                            <a href='https://travel-needs.herokuapp.com/'> <img src={Travel} className='image' /></a>
                        </div>
                        <div>
                            <a href='https://cbc-weather-app.herokuapp.com/'> <img src={Weather} className='image' /></a>
                        </div>
                        <div>
                            <a href='https://betrayal-at-baldurs-gate-react.herokuapp.com/'> <img src={Baldur} className='image' /></a>
                        </div>

                    </Slider>
                </div>

            </div>
        )
    }
}

export default Home;