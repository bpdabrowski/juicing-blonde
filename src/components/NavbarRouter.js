import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from '../pages/about';
import Challenges from '../pages/challenges';
import Food from '../pages/food';
import Juice from '../pages/juice';

const NavbarRouter = () => {

  return (

    <Router>
        <Navbar />
        <Routes>
            <Route path='/about' component={About} />
            <Route path='/challenges' component={Challenges} />
            <Route path='/food' component={Food} />
            <Route path='/juice' component={Juice} />
        </Routes>
    </Router>

  )
}

export default NavbarRouter
