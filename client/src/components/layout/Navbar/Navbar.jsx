import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = ({ auth }) => {
  const [menuClicked, toggleMenuClicked] = useState(false);
  const handleClick = (e) => {
    toggleMenuClicked((val) => !val);
  };

  // close nav after clicking a link
  const handleLink = (e) => {
    if (menuClicked) {
      toggleMenuClicked(false);
    }
  };
  const guestLinks = (
    <>
      <li>
        <Link onClick={handleLink} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/login">
          Login
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/contact">
          Contact
        </Link>
      </li>
    </>
  );
  const authLinks = (
    <>
      <li>
        <Link onClick={handleLink} to="/about">
          About
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <a onClick={handleLink} href="#!">
          Logout
        </a>
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
