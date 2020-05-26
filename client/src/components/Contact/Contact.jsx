import React, { useState } from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as Rsc from "../Register/Register.styles";
import * as sc from "./Contact.styles";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const { firstName, lastName, email, message } = formData;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };

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

Contact.propTypes = {};

export default Contact;
