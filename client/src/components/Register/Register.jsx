import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./Register.styles";

const Register = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = formData;

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
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Lsc.BackgroundDiv>
      <sc.RegisterContainer>
        <Lsc.LoginHeader>Sign Up</Lsc.LoginHeader>
        <p>
          <Lsc.UserIcon size={20} /> Create an account to volunteer or to find a
          donor
        </p>
        <form onSubmit={handleSubmit}>
          <sc.GridForm>
            <sc.InputContainer gridArea="firstName">
              <Lsc.FormInput
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
              />
              <Lsc.InputLabel>First Name</Lsc.InputLabel>
            </sc.InputContainer>
            <sc.InputContainer gridArea="lastName">
              <Lsc.FormInput
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
              />
              <Lsc.InputLabel>Last Name</Lsc.InputLabel>
            </sc.InputContainer>
            <sc.InputContainer gridArea="email">
              <Lsc.FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Email"
                autoComplete="email"
              />
              <Lsc.InputLabel>Email</Lsc.InputLabel>
            </sc.InputContainer>
            <sc.InputContainer gridArea="password">
              <Lsc.FormInput
                name="password"
                autoComplete="new-password"
                value={password}
                onChange={handleChange}
                required
                type="password"
                placeholder="Password"
              />
              <Lsc.InputLabel>Password</Lsc.InputLabel>
            </sc.InputContainer>
            <sc.InputContainer gridArea="confirmPassword">
              <Lsc.FormInput
                autoComplete="new-password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                required
                type="password"
                placeholder="Confirm Password"
              />
              <Lsc.InputLabel>Confirm Password</Lsc.InputLabel>
            </sc.InputContainer>
          </sc.GridForm>
          <Lsc.LoginButton>Register</Lsc.LoginButton>
        </form>
        <Lsc.signUpPara>
          Already have an account?{" "}
          <Lsc.SignUpLink to="/login">Sign In</Lsc.SignUpLink>
        </Lsc.signUpPara>
      </sc.RegisterContainer>
    </Lsc.BackgroundDiv>
  );
};

Register.propTypes = {};

export default Register;
