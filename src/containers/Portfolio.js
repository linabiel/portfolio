import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

import '../components/css/header.css';
import '../components/css/footer.css';
import '../components/css/main.css';


class Portfolio extends Component {

    render() {

        return (


            <HashRouter>

                <div className='nav-bar'>
                    <li className='nav-bar-item'><NavLink to="/">Home</NavLink></li>
                    <li className='nav-bar-item'><NavLink to="/about">About</NavLink></li>
                    <li className='nav-bar-item'><NavLink to="/projects">Projects</NavLink></li>
                </div>


                <div>
                    <Route id='main-home' path="" component={Home} />

                    <Route id='main-about' path="/about" component={About} />

                    <Route id='main-projects' path="/projects" component={Projects} />
                </div>




                <footer>&copy; 2021 Lina Biel</footer>

            </HashRouter>

        )
    }
}

export default Portfolio;
