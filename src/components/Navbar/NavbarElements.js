import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: transparent;
  height: var(--spacing-20);
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-0) var(--spacing-20) var(--spacing-0) var(--spacing-0); 
  z-index: 12;
  float: right;
  width: 100vw;
  flex-direction: row-reverse;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: var(--color-text);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: var(--spacing-0) var(--spacing-12);
  height: 100%;
  cursor: pointer;
  font-size: var(--fontSize-0);
  font-family: var(--font-heading);
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--color-text);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;