import React, {Component} from "react";

class Projects extends Component {

    render() {

        return (
            <div id='main-projects'>
                <div className='links'>
                    <li className='links'>
                        <a className='links' href="https://travel-needs.herokuapp.com/">Travel Needs</a>
                    </li>
                    <p className='profect-descr'>
                    The web app Travel Needs helps Oscal Wilde, Peter Parker and Me to track our dream destinationsplaces we already been to, and places we must visit. I developed the web app in Python usinFlask as a framework. I created a local PostgreSQL database so I could save user input dataWhile CSS and HTML helped me create a modern looking, easy to navigate website.
                    </p>
                    <p className='tech-stack'>
                        Tech Stack:
                    </p>
                    <p className='tech-stack'>
                        Python, Flask, PostgreSQL, CSS, HTML
                    </p>
                </div>

                <div className='links'>
                    <li className='links'>
                        <a className='links' href="https://cbc-weather-app.herokuapp.com/" data-content="Link Hover">CBC Weather</a>
                    </li>
                    <p className='profect-descr'>
                    An educational Weather app built with JavaScript, APIs, React, Express and MongoDB. A user can view information on the seven days weather forecast for a particular city in the world, save the city to the database, and find the city on Google Maps to refresh geographical knowledge.
                    </p>
                    <p className='tech-stack'>
                        Tech Stack:
                    </p>
                    <p className='tech-stack'>
                        JavaScript, APIs, ReactJS, Express, Node.js, MongoDB, CSS, HTML
                    </p>
                </div>

                <div className='links'>
                    <li className='links'>
                        <a className='links' href="https://betrayal-at-baldurs-gate-react.herokuapp.com/">Betrayal at Baldur's Gate</a>
                    </li>
                    <p className='profect-descr'>
                    A web app game version of the board game Betrayal at Baldur’s Gate build using Spring Boot and H2 database for the backend and ReactJS for the front end. The user can move across the board and get a randomly selected card or a monster to fight.
                    </p>
                    <p className='tech-stack'>
                        Tech Stack:
                    </p>
                    <p className='tech-stack'>
                        Spring Boot, H2 Database, JavaScript, APIs, ReactJS, Express, Node.js, MongoDB, CSS, HTML
                    </p>
                </div>

            </div>
        )
    }
}

export default Projects;