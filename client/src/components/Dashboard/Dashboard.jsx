import React from "react";
import PropTypes from "prop-types";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./Dashboard.styles";
import { connect } from "react-redux";
import {
  selectFirstName,
  selectIsRegistered,
} from "../../redux/selectors/authSelectors";
import { createStructuredSelector } from "reselect";
import ButtonContainer from "./ButtonContainer";
import { DonorIcon } from "./ButtonContainer";
import DonorForm from "./DonorForm";

const Dashboard = ({ firstName, isRegistered }) => {
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
            <p>Your have registred for the event</p>
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
};

const mapStateToProps = createStructuredSelector({
  firstName: selectFirstName,
  isRegistered: selectIsRegistered,
});

export default connect(mapStateToProps)(Dashboard);
