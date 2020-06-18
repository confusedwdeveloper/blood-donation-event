import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as sc from "./HomePage.styles";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectLoginStatus,
  selectAuthLoading,
} from "../../redux/selectors/authSelectors";
import Spinner from "../layout/Spinner/Spinner";
import { createStructuredSelector } from "reselect";

const HomePage = ({ isLoggedIn, loading }) => {
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <sc.HomeContainer>
      <sc.Overlay>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
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
          </Fragment>
        )}
      </sc.Overlay>
    </sc.HomeContainer>
  );
};

HomePage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectLoginStatus,
  loading: selectAuthLoading,
});

export default connect(mapStateToProps)(HomePage);
