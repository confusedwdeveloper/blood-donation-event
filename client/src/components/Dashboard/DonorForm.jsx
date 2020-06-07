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
import { selectFullName } from "../../redux/selectors/authSelectors";
import Dropdown from "./Dropdown";
import axios from "axios";
import { toast } from "react-toastify";
import { LOAD_USER } from "../../redux/actions/types";

const DonorForm = ({ fullName, dispatch }) => {
  const [data, setData] = useState({
    fullName,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const data = { bloodType, msg };
    try {
      const res = await axios.post("/api/event", data, config);
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
      toast.success("Registration successful");
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
};

const mapStateToProps = createStructuredSelector({
  fullName: selectFullName,
});

export default connect(mapStateToProps)(DonorForm);
