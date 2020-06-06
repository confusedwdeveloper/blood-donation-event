import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SendIcon, TextArea } from "../Contact/Contact.styles";
import { LoginButton } from "../Login/Login.styles";
import {
  FormInput,
  FormInputContainer,
  InputLabel,
} from "../Login/Login.styles";
import { createStructuredSelector } from "reselect";
import {
  selectFullName,
  selectUserId,
} from "../../redux/selectors/authSelectors";
import Dropdown from "./Dropdown";

const DonorForm = ({ fullName, id }) => {
  const [data, setData] = useState({
    fullName,
    id,
    bloodType: "",
    msg: "",
  });

  const { bloodType, msg } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((d) => ({
      ...d,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ id, bloodType, msg, fullName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInputContainer>
        <FormInput
          type="text"
          name="fullName"
          value={fullName}
          disabled
          placeholder="Name"
        />
        <InputLabel>Name</InputLabel>
      </FormInputContainer>
      <FormInputContainer>
        <Dropdown handleChange={handleChange} value={bloodType} />
      </FormInputContainer>
      <FormInputContainer>
        <TextArea
          name="msg"
          value={msg}
          onChange={handleChange}
          required
          placeholder="Message"
        />
        <InputLabel>Message</InputLabel>
      </FormInputContainer>
      <LoginButton>
        Sign Up <SendIcon />
      </LoginButton>
    </form>
  );
};

DonorForm.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  fullName: selectFullName,

  id: selectUserId,
});

export default connect(mapStateToProps)(DonorForm);
