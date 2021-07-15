import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import About from './About';


class Header extends Component {

    render() {

            return (
                <HashRouter>

                    <div>
                        <li className='nav-bar'><NavLink to="/portfolio/">Home</NavLink></li>
                        <li className='nav-bar'><NavLink to="/about">About</NavLink></li>
                        <li className='nav-bar'><NavLink to="/projects">Projects</NavLink></li>
                    </div>

                    <div className="routes">
                        <Route path="/about" component={About} />
                        {/* <Route path="/contact" component={Projects} /> */}
                    </div>

                </HashRouter>

            )
        }
    }

export default Header;

