import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Navbar.styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/auth";

const Navbar = ({ auth: { loading, isLoggedIn }, logoutUser }) => {
  const [menuClicked, toggleMenuClicked] = useState(false);
  const handleClick = (e) => {
    toggleMenuClicked((val) => !val);
  };

  // close nav after clicking a link
  const handleLink = () => {
    if (menuClicked) {
      toggleMenuClicked(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    handleLink();
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
        <Link onClick={handleLink} to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link onClick={handleLink} to="/login">
          Login
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
        <a onClick={handleLogout} href="#!">
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
        {!loading && isLoggedIn ? authLinks : guestLinks}
      </sc.LinkContainer>
    </sc.NavContainer>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
