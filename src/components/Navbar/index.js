import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Autoservisas
          </NavLink>
          <NavLink to="/Booking" activeStyle>
            Prisijungimas
          </NavLink>
          <NavLink to="/Contact" activeStyle>
            Kontaktai
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
