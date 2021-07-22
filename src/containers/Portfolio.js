import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

import '../components/css/main.css';
import '../components/css/header.css';
import '../components/css/carousel.css';
import '../components/css/about.css';
import '../components/css/project.css';
import '../components/css/footer.css';


class Portfolio extends Component {

    render() {

        return (

            <>

                <Router>

                    <div className='nav-bar'>
                        <div className='nav-bar'>
                            <li className='nav-bar-link'><Link className='nav-bar-link' to={{ pathname: "https://www.linkedin.com/in/lina-biel" }} target="_blank" >LinkedIn</Link></li>
                            <li className='nav-bar-link'><Link className='nav-bar-link' to={{ pathname: "https://github.com/linabiel" }} target="_blank" >GitHub</Link></li>
                        </div>

                        <div className='nav-bar'>
                            <li className='nav-bar-item'><Link className='nav-bar-item' to="/portfolio">Home</Link></li>
                            <li className='nav-bar-item'><Link className='nav-bar-item' to="/about">About</Link></li>
                            <li className='nav-bar-item'><Link className='nav-bar-item' to="/projects">Projects</Link></li>
                        </div>

                    </div>



                    <div id='main'>
                        <Switch>
                            <Route id='main-home' exact path="/portfolio" component={Home} />
                            <Route id='main-about' exact path="/about" component={About} />
                            <Route id='main-projects' exact path="/projects" component={Projects} />
                        </Switch>
                    </div>

                </Router>


                <footer>&copy; 2021 Lina Biel</footer>

            </>

        )
    }
}

export default Portfolio;
