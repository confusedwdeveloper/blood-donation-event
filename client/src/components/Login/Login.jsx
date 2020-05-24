import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Login.styles";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
    console.log({ email, password });
  };

  const { email, password } = formData;

  return (
    <sc.BackgroundDiv>
      <sc.LoginContainer>
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
      </sc.LoginContainer>
    </sc.BackgroundDiv>
  );
};

Login.propTypes = {};

export default Login;
