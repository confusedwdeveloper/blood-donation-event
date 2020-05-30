import styled from "styled-components";
import { Organization } from "@styled-icons/octicons/Organization";
import { RegisterButton } from "../HomePage/HomePage.styles";
import { LoginContainer } from "../Login/Login.styles";

export const AboutIcon = styled(Organization)`
  position: relative;
  bottom: 2px;
`;

export const TextSection = styled.section`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  p {
    line-height: 1.3;
    margin-bottom: 1rem;
  }
`;

export const AboutContainer = styled(LoginContainer)`
  max-width: 94vw;
  max-height: 65vh;

  @media (max-width: 1000px) {
    max-height: 100%;

    ${TextSection} {
      padding: 0;
      margin: 1rem 0;
    }
  }
`;

export const AboutButton = styled(RegisterButton)`
  display: inline-block;
`;

export const ImageContainer = styled.div`
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;

//grid
export const aboutGrid = styled.div`
  display: grid;
  column-gap: 3rem;
  grid-template-columns: 3fr 2fr;

  @media (max-width: 1000px) {
    display: block;
    column-gap: 0;
    ${ImageContainer} {
      display: none;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
