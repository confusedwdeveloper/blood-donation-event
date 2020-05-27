import React, { Fragment, useEffect } from "react";
import GlobalStyle from "./globalStyles.styles";
import Navbar from "./components/layout/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { loadUser } from "./redux/actions/auth";
import PropTypes from "prop-types";

import "react-toastify/dist/ReactToastify.min.css";

function App({ loadUser }) {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Fragment>
      <GlobalStyle />
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}
App.prototypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(App);
