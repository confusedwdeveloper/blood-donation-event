import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = ({ auth }) => {
  const [menuClicked, toggleMenuClicked] = useState(false);
  const handleClick = (e) => {
    toggleMenuClicked((val) => !val);
  };
  const guestLinks = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );
  const authLinks = (
    <>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a href="#!">Logout</a>
      </li>
      {/* todo initial */}
    </>
  );

  return (
    <sc.NavContainer>
      <sc.MenuIcon title="Menu" size={28} onClick={handleClick} />
      <h1>
        <Link to="/">
          <sc.DonattionIcon size={25} /> Blood Donation Event
        </Link>
      </h1>
      <sc.LinkContainer menuClicked={menuClicked}>
        {auth ? authLinks : guestLinks}
      </sc.LinkContainer>
    </sc.NavContainer>
  );
};

Navbar.propTypes = {};

export default Navbar;
