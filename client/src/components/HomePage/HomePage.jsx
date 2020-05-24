import React from "react";
import PropTypes from "prop-types";
import * as sc from "./HomePage.styles";
import { Link } from "react-router-dom";

const HomePage = (props) => {
  return (
    <sc.HomeContainer>
      <sc.Overlay>
        <sc.InnerTextContainer>
          <h1>Welcome To Blood Donation Event</h1>
          <p>Help us save lives by donating blood. Every drop counts.</p>
          <div>
            <sc.RegisterButton as={Link} to="/register">
              Register
            </sc.RegisterButton>
            <sc.RegisterButton as={Link} to="/login">
              Sign In
            </sc.RegisterButton>
          </div>
        </sc.InnerTextContainer>
      </sc.Overlay>
    </sc.HomeContainer>
  );
};

HomePage.propTypes = {};

export default HomePage;
