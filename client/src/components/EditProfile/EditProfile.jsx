import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as Lsc from "../Login/Login.styles";
import Spinner from "../layout/Spinner/Spinner";
import { loadUser, dispatchUser } from "../../redux/actions/auth";
import { createStructuredSelector } from "reselect";
import { Edit } from "@styled-icons/boxicons-solid/Edit";
import {
  selectAuthLoading,
  selectUser,
} from "../../redux/selectors/authSelectors";
import Dropdown from "./Dropdown";
import axios from "axios";
import { toast } from "react-toastify";

const EditProfile = ({ loadUser, loading, user, history, dispatchUser }) => {
  useEffect(() => {
    // loading user when user visits this page
    loadUser();
  }, [loadUser]);
  const [data, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    location: "",
  });
  useEffect(() => {
    if (user) {
      setFormData((d) => ({
        ...d,
        firstName: user?.firstName,
        lastName: user?.lastName,
        age: user?.age || "",
        gender: user?.gender || "",
        location: user?.location || "",
      }));
    }
  }, [user]);

  const { firstName, lastName, age, gender, location } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((d) => ({
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

    try {
      const res = await axios.post("/api/profile/edit", data, config);
      dispatchUser(res.data);
      toast.success("Profile Updated");
      history.push("/dashboard");
    } catch (err) {
      const { errors } = err?.response?.data;
      if (errors) {
        const options = {
          position: "top-center",
        };
        errors.forEach((error) => toast.error(error.msg, options));
      }
    }
  };

  return (
    <Lsc.BackgroundDiv>
      <Lsc.LoginContainer>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Lsc.LoginHeader>Edit Profile</Lsc.LoginHeader>
            <p>
              <Edit size={20} /> Add some info about yourself
            </p>
            <form onSubmit={handleSubmit}>
              <Lsc.FormInputContainer>
                <Lsc.FormInput
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <Lsc.InputLabel>First Name</Lsc.InputLabel>
              </Lsc.FormInputContainer>
              <Lsc.FormInputContainer>
                <Lsc.FormInput
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <Lsc.InputLabel>Last Name</Lsc.InputLabel>
              </Lsc.FormInputContainer>
              <Lsc.FormInputContainer>
                <Lsc.FormInput
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleChange}
                  placeholder="Age"
                />
                <Lsc.InputLabel>Age</Lsc.InputLabel>
              </Lsc.FormInputContainer>
              <Lsc.FormInputContainer>
                <Dropdown handleChange={handleChange} value={gender} />
              </Lsc.FormInputContainer>
              <Lsc.FormInputContainer>
                <Lsc.FormInput
                  type="text"
                  name="location"
                  value={location}
                  onChange={handleChange}
                  placeholder="Location"
                />
                <Lsc.InputLabel>Location</Lsc.InputLabel>
              </Lsc.FormInputContainer>
              <Lsc.LoginButton>Update</Lsc.LoginButton>
            </form>
          </Fragment>
        )}
      </Lsc.LoginContainer>
    </Lsc.BackgroundDiv>
  );
};

EditProfile.propTypes = {
  loadUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  dispatchUser: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loading: selectAuthLoading,
  user: selectUser,
});

export default connect(mapStateToProps, { loadUser, dispatchUser })(
  EditProfile
);
