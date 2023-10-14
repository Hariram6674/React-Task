import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = ({ onLinkClick }) => {
  
  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick(); 
    }
  };

  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/task1" activeStyle onClick={handleLinkClick}>
            Task 1
          </NavLink>
          <NavLink to="/task2" activeStyle onClick={handleLinkClick}>
            Task 2
          </NavLink>
          <NavLink to="/task3" activeStyle onClick={handleLinkClick}>
            Task 3
          </NavLink>
          <NavLink to="/task4" activeStyle onClick={handleLinkClick}>
            Task 4
          </NavLink>
          <NavLink to="/task5" activeStyle onClick={handleLinkClick}>
            Task 5
          </NavLink>
          <NavLink to="/task6" activeStyle onClick={handleLinkClick}>
            Task 6
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
