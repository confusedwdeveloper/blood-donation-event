import styled from "styled-components";
import bgImage from "../../../assets/blood-donation.webp";

// container for overall page
export const HomeContainer = styled.section`
  height: 90vh;
  background: url(${bgImage}) no-repeat center center/cover;
  position: relative;
`;

//overlay
export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

//inner text container
export const InnerTextContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;

  h1 {
    color: #fffffe;
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.67rem;
    color: #b8c1ec;
    margin-bottom: 1rem;
  }
  div {
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    & a:first-child {
      margin-right: 1rem;
    }
  }
  @media (max-width: 920px) {
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.56rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.3rem;
    }
    div a:first-child {
      margin-right: 0;
      margin-bottom: 1rem;
    }
    div {
      flex-direction: column;
    }
  }
`;

//buttons
export const RegisterButton = styled.button`
  padding: 0.5rem 1.5rem;
  background: #eebbc3;
  color: #232946;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
