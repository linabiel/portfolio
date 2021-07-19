import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

import '../components/css/header.css';
import '../components/css/footer.css';
import '../components/css/main.css';


class Portfolio extends Component {

    render() {

        return (

            <>

                <Router>

                    <div className='nav-bar'>
                        <li className='nav-bar-item'><Link to="/">Home</Link></li>
                        <li className='nav-bar-item'><Link to="/about">About</Link></li>
                        <li className='nav-bar-item'><Link to="/projects">Projects</Link></li>
                    </div>


                    <div>
                    <Switch>
                        <Route id='main-home' exact path="/" component={Home} />
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
