import React, { useState } from "react";
import PropTypes from "prop-types";
import * as sc from "./Donors.styles";
import ReactModal from "react-modal";
import Moment from "react-moment";

ReactModal.setAppElement("#root");

const DonorCard = ({
  donor: {
    bloodType,
    date,
    msg,
    user: { firstName, lastName, age, location, email },
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((state) => !state);
  return (
    <div>
      <sc.GridDiv gridArea="name">
        <h4>Name:</h4>
        <p>{`${firstName} ${lastName}`}</p>
      </sc.GridDiv>
      <sc.GridDiv redColor gridArea="blood">
        <h4>Blood Type:</h4>
        <p>{bloodType}</p>
      </sc.GridDiv>
      <sc.GridDiv gridArea="button">
        <sc.LoginButton onClick={handleClick}>Details</sc.LoginButton>
      </sc.GridDiv>
      <ReactModal
        isOpen={isOpen}
        closeTimeoutMS={200}
        contentLabel="Donor information"
        onRequestClose={handleClick}
        style={{
          content: {
            display: "flex",
            width: "max-content",
            margin: "auto",
            padding: "0rem 2rem",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <sc.ModalContainer>
          <sc.GridDiv>
            <h4>Name:</h4>
            <p>{`${firstName} ${lastName}`}</p>
          </sc.GridDiv>
          <sc.GridDiv>
            <h4>Email:</h4>
            <p>{email}</p>
          </sc.GridDiv>
          <sc.GridDiv redColor>
            <h4>Blood Type:</h4>
            <p>{bloodType}</p>
          </sc.GridDiv>
          <sc.GridDiv>
            <h4>Age:</h4>
            <p>{age}</p>
          </sc.GridDiv>
          <sc.GridDiv>
            <h4>Location:</h4>
            <p>{location}</p>
          </sc.GridDiv>
          <sc.GridDiv>
            <h4>Message:</h4>
            <p>{msg}</p>
          </sc.GridDiv>
          <sc.TimePara>
            Signed up <Moment fromNow>{date}</Moment>.
          </sc.TimePara>
          <sc.LoginButton onClick={handleClick}>Close</sc.LoginButton>
        </sc.ModalContainer>
      </ReactModal>
    </div>
  );
};

DonorCard.propTypes = {
  donor: PropTypes.object.isRequired,
};

export default DonorCard;
