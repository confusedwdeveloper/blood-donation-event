import React from "react";
import * as sc from "./Dashboard.styles";
import { RegisterButton } from "../HomePage/HomePage.styles";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserIcon } from "../Login/Login.styles";

const InfoButton = styled(RegisterButton)`
  padding-right: 1rem;
  padding-left: 1rem;
  cursor: pointer;
`;

export const DonorIcon = styled(UserIcon)`
  position: relative;
  top: -2px;
`;

const ButtonContainer = () => {
  return (
    <sc.ButtonDiv>
      <InfoButton as={Link} to="/edit-profile">
        <sc.InfoIcon size={18} /> Edit Personal Info{" "}
      </InfoButton>
      <InfoButton as={Link} to="/donors">
        <DonorIcon size={18} /> View Registered Donors
      </InfoButton>
    </sc.ButtonDiv>
  );
};

export default ButtonContainer;
