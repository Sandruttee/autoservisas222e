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
            Reserve the time (user side)
          </NavLink>

          <NavLink to="/Contact" activeStyle>
            Kontaktai
          </NavLink>
          <NavLink to="/Booking" activeStyle>
            Log in (for admin)
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
