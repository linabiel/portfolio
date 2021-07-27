import React from "react";

import Travel from '../components/images/travelslide.jpeg';
import Weather from '../components/images/weatherslide.jpeg';
import Baldur from '../components/images/baldurslide.jpeg';


const Projects = () => {

    return (
        <div id='main-project'>


            <div className='project-card'>
                <li className='link'>
                    <a className='link-title' href="https://travel-needs.herokuapp.com" target='_blank' rel="noreferrer">Travel Needs</a>
                </li>
                <div className='image1'>
                    <a href='https://travel-needs.herokuapp.com' target='_blank' rel="noreferrer"><img id='travel' src={Travel} loading="lazy" alt='' /></a>
                </div>
                <p className='tech-stack-title'>
                    Tech Stack:
                </p>
                <p className='tech-stack'>
                    Python, Flask, PostgreSQL, CSS, HTML
                </p>
                <p className='project-descr'>
                    The web app Travel Needs helps Oscal Wilde, Peter Parker and Me to track our dream destinations: places we already been to, and places we must visit. I developed the web app in Python using Flask as a framework. I created a local PostgreSQL database so I could save user input data. While CSS and HTML helped me create a modern looking, easy to navigate website.
                </p>
            </div>

            <div className='project-card'>
                <li className='link'>
                    <a className='link-title' href="https://cbc-weather-app.herokuapp.com/" target='_blank' rel="noreferrer">CBC Weather</a>
                </li>
                <div className='image2'>
                    <a href='https://cbc-weather-app.herokuapp.com/' target='_blank' rel="noreferrer"><img id='weather' src={Weather} loading="lazy" alt='' /></a>
                </div>
                <p className='tech-stack-title'>
                    Tech Stack:
                </p>
                <p className='tech-stack'>
                    JavaScript, APIs, ReactJS, Express, Node.js, MongoDB, CSS, HTML
                </p>
                <p className='project-descr'>
                    An educational Weather app built with JavaScript, APIs, React, Express and MongoDB. A user can view information on the seven days weather forecast for a particular city in the world, save the city to the database, and find the city on Google Maps to refresh geographical knowledge.
                </p>
            </div>

            <div className='project-card'>
                <li className='link'>
                    <a className='link-title' href="https://betrayal-at-baldurs-gate-react.herokuapp.com/" target='_blank' rel="noreferrer">Betrayal at Baldur's Gate</a>
                </li>
                <div className='image3'>
                    <a href='https://betrayal-at-baldurs-gate-react.herokuapp.com/' target='_blank' rel="noreferrer"><img id='baldur' src={Baldur} loading="lazy" alt='' /></a>
                </div>
                <p className='tech-stack-title'>
                    Tech Stack:
                </p>
                <p className='tech-stack'>
                    Spring Boot, H2 Database, JavaScript, APIs, ReactJS, Express, Node.js, MongoDB, CSS, HTML
                </p>
                <p className='project-descr'>
                    A web app game version of the board game Betrayal at Baldur’s Gate build using Spring Boot and H2 database for the backend and ReactJS for the front end. The user can move across the board and get a randomly selected card or a monster to fight.
                </p>
            </div>

        </div>
    )
}

export default Projects;



