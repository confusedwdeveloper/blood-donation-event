import React from "react";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./NotFound.styles";

const NotFound = () => {
  return (
    <Lsc.BackgroundDiv>
      <Lsc.LoginContainer>
        <sc.Header>404</sc.Header>
        <sc.Prargraph>Oops! Something is wrong.</sc.Prargraph>
        <sc.Button to="/">Go Back</sc.Button>
      </Lsc.LoginContainer>
    </Lsc.BackgroundDiv>
  );
};

export default NotFound;
