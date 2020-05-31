import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner/Spinner";
import {
  selectAuthLoading,
  selectLoginStatus,
} from "../../redux/selectors/authSelectors";
import { createStructuredSelector } from "reselect";

const PrivateRoute = ({
  component: Component,
  loading,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
  isLoggedIn: selectLoginStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
