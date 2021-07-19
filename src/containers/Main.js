// import React, {useState, useEffect} from 'react';
// import {Route, NavLink, HashRouter} from "react-router-dom";

// import About from '../components/About';
// import Home from '../components/Home';
// import Projects from '../components/Projects';
// import Portfolio from './Portfolio';

// const MainContainer = () => {
//     const [home, setHome] = useState([]);

//     useEffect(() => {
//         getHome();
//     }, [])

//     const getHome = function () {
//         fetch('http://localhost:3000/portfolio#/')
//         .then(response => response.text())
//         .then(home => setHome)
//     }

//     return (
//         <>

//             <Home Home={Home} />
//             <About About={About} />
//             <Projects Projects={Projects} />

//         </>
//     )

// }

// export default MainContainer;