import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Login.styles";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
  selectLoginStatus,
  selectAuthLoading,
} from "../../redux/selectors/authSelectors";
import Spinner from "../layout/Spinner/Spinner";

const Login = ({ isLoggedIn, loginUser, loading }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <sc.BackgroundDiv>
      <sc.LoginContainer>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <sc.LoginHeader>Log In</sc.LoginHeader>
            <p>
              <sc.UserIcon size={20} /> Log into your account to volunteer or to
              find a donor
            </p>
            <form onSubmit={handleSubmit}>
              <sc.FormInputContainer>
                <sc.FormInput
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  autoComplete="email"
                />
                <sc.InputLabel>Email</sc.InputLabel>
              </sc.FormInputContainer>
              <sc.FormInputContainer>
                <sc.FormInput
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <sc.InputLabel>Password</sc.InputLabel>
              </sc.FormInputContainer>
              <sc.LoginButton>Log In</sc.LoginButton>
            </form>
            <sc.signUpPara>
              Don't have an account?{" "}
              <sc.SignUpLink to="/register">Sign Up</sc.SignUpLink>
            </sc.signUpPara>
          </>
        )}
      </sc.LoginContainer>
    </sc.BackgroundDiv>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isLoggedIn: selectLoginStatus,
  loading: selectAuthLoading,
});

export default connect(mapStateToProps, { loginUser })(Login);
