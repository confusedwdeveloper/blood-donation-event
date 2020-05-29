import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as Rsc from "../Register/Register.styles";
import * as sc from "./Contact.styles";
import { connect } from "react-redux";
import {
  selectContact,
  selectLoginStatus,
  selectAuthLoading,
} from "../../redux/selectors/authSelectors";
import { createStructuredSelector } from "reselect";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../layout/Spinner/Spinner";

const Contact = ({ userData, loading, isLoggedIn, history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { firstName, lastName, email, message } = formData;

  useEffect(() => {
    isLoggedIn &&
      !loading &&
      setFormData({
        firstName: userData?.firstName ?? "",
        lastName: userData?.lastName ?? "",
        email: userData?.email ?? "",
      });
  }, [isLoggedIn, loading, userData]);

  useEffect(() => {
    !isLoggedIn &&
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
  }, [isLoggedIn]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contact", formData, config);

      toast.success(res.data.msg);

      history.push(isLoggedIn ? "/dashboard" : "/");
    } catch (err) {
      const { errors } = err.response.data;
      if (errors) {
        const options = {
          position: "top-center",
        };
        errors.forEach((error) => toast.error(error.msg, options));
      }
    }
  };

  if (isLoggedIn && !userData) {
    return (
      <Lsc.BackgroundDiv>
        <Spinner />
      </Lsc.BackgroundDiv>
    );
  }

  return (
    <Lsc.BackgroundDiv>
      <Rsc.RegisterContainer>
        <Lsc.LoginHeader>Contact Us</Lsc.LoginHeader>
        <p>
          <Lsc.UserIcon size={20} /> Have a question or comment? Drop us a line
          and we will get back to you shortly.
        </p>
        <form onSubmit={handleSubmit}>
          <sc.ContactGrid>
            <Rsc.InputContainer gridArea="firstName">
              <Lsc.FormInput
                disabled={isLoggedIn}
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
              />
              <Lsc.InputLabel>First Name</Lsc.InputLabel>
            </Rsc.InputContainer>
            <Rsc.InputContainer gridArea="lastName">
              <Lsc.FormInput
                disabled={isLoggedIn}
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
              />
              <Lsc.InputLabel>Last Name</Lsc.InputLabel>
            </Rsc.InputContainer>
            <Rsc.InputContainer gridArea="email">
              <Lsc.FormInput
                disabled={isLoggedIn}
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Email"
                autoComplete="email"
              />
              <Lsc.InputLabel>Email</Lsc.InputLabel>
            </Rsc.InputContainer>
            <Rsc.InputContainer gridArea="message">
              <sc.TextArea
                name="message"
                value={message}
                onChange={handleChange}
                required
                placeholder="Message"
              />
              <Lsc.InputLabel>Message</Lsc.InputLabel>
            </Rsc.InputContainer>
          </sc.ContactGrid>
          <Lsc.LoginButton>
            Send <sc.SendIcon />
          </Lsc.LoginButton>
        </form>
      </Rsc.RegisterContainer>
    </Lsc.BackgroundDiv>
  );
};

Contact.propTypes = {
  userData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  userData: selectContact,
  loading: selectAuthLoading,
  isLoggedIn: selectLoginStatus,
});

export default connect(mapStateToProps)(Contact);
