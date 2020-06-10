import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  selectUser,
  selectAuthLoading,
} from "../../redux/selectors/authSelectors";
import * as sc from "./Dashboard.styles";
import { createStructuredSelector } from "reselect";
import Spinner from "../layout/Spinner/Spinner";

const ProfileInfo = ({ user, loading }) => {
  if (loading || !user) {
    return <Spinner />;
  }
  const { firstName, lastName, location, age, gender } = user;

  const fullName = `${firstName} ${lastName}`;
  return (
    <sc.ProfileInfoContainer>
      <h3>Profile Info:</h3>

      <div>
        <h4>Full Name:</h4>
        <p>{fullName}</p>
      </div>
      <div>
        <h4>Gender:</h4>
        <p>{gender || "N/A"}</p>
      </div>
      <div>
        <h4>Age:</h4>
        <p>{age || "N/A"}</p>
      </div>
      <div>
        <h4>Location:</h4>
        <p>{location || "N/A"}</p>
      </div>
    </sc.ProfileInfoContainer>
  );
};

ProfileInfo.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};
const mapStateToProps = createStructuredSelector({
  user: selectUser,
  loading: selectAuthLoading,
});

export default connect(mapStateToProps)(ProfileInfo);
