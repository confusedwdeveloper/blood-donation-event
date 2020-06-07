import React from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./Dashboard.styles";
import { connect } from "react-redux";
import {
  selectFirstName,
  selectIsRegistered,
  selectRegisteredDate,
} from "../../redux/selectors/authSelectors";
import { createStructuredSelector } from "reselect";
import ButtonContainer from "./ButtonContainer";
import { DonorIcon } from "./ButtonContainer";
import DonorForm from "./DonorForm";
import Moment from "react-moment";

const Dashboard = ({ firstName, isRegistered, registeredDate }) => {
  return (
    <Lsc.BackgroundDiv>
      <sc.DashboardContainer>
        <div>
          <sc.TextHeader>Welcome {firstName}</sc.TextHeader>
          <ButtonContainer />
        </div>
        <div>
          <h3>
            <sc.Icon size={16} /> Our next blood donation camp is on 26 Sept
            2020.
          </h3>
          {isRegistered ? (
            <sc.RegisteredPara>
              Your have registered for this event{" "}
              <Moment fromNow>{registeredDate}</Moment>
            </sc.RegisteredPara>
          ) : (
            <>
              <p>
                <DonorIcon size={18} /> Fill up this form to sign up as a donor
              </p>
              <DonorForm />
            </>
          )}
        </div>
      </sc.DashboardContainer>
    </Lsc.BackgroundDiv>
  );
};

Dashboard.propTypes = {
  firstName: PropTypes.string.isRequired,
  isRegistered: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  firstName: selectFirstName,
  isRegistered: selectIsRegistered,
  registeredDate: selectRegisteredDate,
});

export default connect(mapStateToProps)(Dashboard);
