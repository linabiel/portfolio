import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Travel from '../components/images/travel.png';
import Weather from '../components/images/weather.png';
import Baldur from '../components/images/baldur.png';


import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

import '../components/css/header.css';
import '../components/css/footer.css';
import '../components/css/project.css';
import '../components/css/about.css';
import '../components/css/carousel.css';


class Portfolio extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <>

                <Router>

                    <div className='nav-bar'>
                        <li className='nav-bar-item'><Link className='nav-bar-item' to="/portfolio">Home</Link></li>
                        <li className='nav-bar-item'><Link className='nav-bar-item' to="/about">About</Link></li>
                        <li className='nav-bar-item'><Link className='nav-bar-item' to="/projects">Projects</Link></li>
                    </div>


                    <div>
                        <Switch>
                            <Route id='main-home' exact path="/portfolio" component={Home} />
                            <Route id='main-about' exact path="/about" component={About} />
                            <Route id='main-projects' exact path="/projects" component={Projects} />
                        </Switch>
                    </div>

                </Router>


                <div className='carousel'>

                    <Slider className='carousel'{...settings}>
                        <div>
                            <img src={Travel} className='image' />
                        </div>
                        <div>
                            <img src={Weather} className='image' />
                        </div>
                        <div>
                            <img src={Baldur} className='image' />
                        </div>
                    </Slider>
                </div>


                <footer>&copy; 2021 Lina Biel</footer>


            </>

        )
    }
}

export default Portfolio;
