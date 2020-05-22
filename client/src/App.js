import React from "react";
import GlobalStyle from "./globalStyles.styles";
import Navbar from "./components/layout/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/layout/HomePage/HomePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
