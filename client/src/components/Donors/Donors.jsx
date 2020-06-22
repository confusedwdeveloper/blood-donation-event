import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadDonors, clearDonors } from "../../redux/actions/donor";
import * as sc from "./Donors.styles";
import * as Lsc from "../Login/Login.styles";
import {
  selectDonorsError,
  selectDonors,
  selectDonorsLoading,
} from "../../redux/selectors/donorSelectors";
import { createStructuredSelector } from "reselect";
import Spinner from "../layout/Spinner/Spinner";
import { DonateBlood } from "@styled-icons/boxicons-regular/DonateBlood";
import DonorCard from "./DonorCard";

const Donors = ({ loadDonors, donorsLoading, donors, error }) => {
  useEffect(() => {
    loadDonors();
    return () => {
      clearDonors();
    };
  }, [loadDonors]);

  return (
    <Lsc.BackgroundDiv>
      <Lsc.LoginContainer>
        {donorsLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Lsc.LoginHeader>Donors</Lsc.LoginHeader>
            <p>
              <DonateBlood size={20} /> List of volunteers who have signed up
              for upcoming event.
            </p>
            {error ? (
              <sc.ErrorPara error>
                Something went wrong. Please try again
              </sc.ErrorPara>
            ) : !donors.length ? (
              <sc.ErrorPara>
                No volunteers yet. Be the first one to{" "}
                <Lsc.SignUpLink to="/dashboard">Sign Up.</Lsc.SignUpLink>
              </sc.ErrorPara>
            ) : (
              <sc.DonorListContainer>
                {donors.map((donor) => (
                  <DonorCard donor={donor} key={donor._id} />
                ))}
              </sc.DonorListContainer>
            )}
          </Fragment>
        )}
      </Lsc.LoginContainer>
    </Lsc.BackgroundDiv>
  );
};

Donors.propTypes = {
  donorsLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  donors: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  donorsLoading: selectDonorsLoading,
  error: selectDonorsError,
  donors: selectDonors,
});

export default connect(mapStateToProps, { loadDonors })(Donors);
