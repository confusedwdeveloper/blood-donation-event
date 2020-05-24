import React, { Fragment } from "react";
import GlobalStyle from "./globalStyles.styles";
import Navbar from "./components/layout/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
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
      </Switch>
    </Fragment>
  );
}

export default App;
