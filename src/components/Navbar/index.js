import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/Autoservisas" activeStyle>
            Autoservisas
          </NavLink>
          <NavLink to="/Booking" activeStyle>
            Booking
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
