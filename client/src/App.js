import React, { Fragment, useEffect } from "react";
import GlobalStyle from "./globalStyles.styles";
import Navbar from "./components/layout/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contact from "./components/Contact/Contact";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";
import { loadUser } from "./redux/actions/auth";
import PropTypes from "prop-types";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/Routing/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

import "react-toastify/dist/ReactToastify.min.css";
import EditProfile from "./components/EditProfile/EditProfile";
import Donors from "./components/Donors/Donors";

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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/contact" component={Contact} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/donors" component={Donors} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}
App.prototypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(App);
