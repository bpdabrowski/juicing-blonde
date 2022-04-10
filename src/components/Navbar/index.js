
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Link } from "gatsby"

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <Link to='/challenges' activeStyle>
              Challenges
            </Link>
            <Link to='/juice' activeStyle>
              Juice
            </Link>
            <Link to='/food' activeStyle>
              Food
            </Link>
            <Link to='/about' activeStyle>
              About
            </Link>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;