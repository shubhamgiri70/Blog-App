import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex justify-between item-center">
        <NavLink to="/">
          <img
            className="logo"
            src="https://w7.pngwing.com/pngs/265/349/png-transparent-blogger-computer-icons-logo-blogger-logo-icon-svg-miscellaneous-text-trademark.png"
            alt="logo"
          />
        </NavLink>

        <nav>
          <ul className="flex">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
