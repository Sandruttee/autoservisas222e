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

          <NavLink to="/BookingApp" activeStyle>
            Rezervuok laiką
          </NavLink>

          <NavLink to="/Contact" activeStyle>
            Kontaktai
          </NavLink>
          <NavLink to="/Booking" activeStyle>
            Prisijungimas
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
