import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./Register.styles";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/auth";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Register = ({ registerUser, isLoggedIn }) => {
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
      const options = {
        position: "top-center",
      };
      toast.error("Passwords do not  match", options);
    } else {
      registerUser({ firstName, lastName, email, password });
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { registerUser })(Register);
