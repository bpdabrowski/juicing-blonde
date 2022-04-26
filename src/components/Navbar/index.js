
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/challenges' activeStyle>
              Challenges
            </NavLink>
            <NavLink to='/juice' activeStyle>
              Juice
            </NavLink>
            <NavLink to='/food' activeStyle>
              Food
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
          </NavMenu>
        </Nav>
    );
  };
    
  export default Navbar;