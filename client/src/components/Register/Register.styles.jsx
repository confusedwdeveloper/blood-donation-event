import styled from "styled-components";
import { FormInputContainer, LoginContainer } from "../Login/Login.styles";

// form with display grid
export const GridForm = styled.div`
  display: grid;
  grid-template-areas:
    "firstName lastName"
    "email email"
    "password password"
    "confirmPassword confirmPassword";
  column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "firstName"
      "lastName"
      "email"
      "password"
      "confirmPassword";
  }
`;

// having issue with inputs at lower width screens. going to increase container size
export const RegisterContainer = styled(LoginContainer)`
  @media (max-width: 374px) {
    max-width: 80vw;
  }
`;

// adding grid-area to input containers imported from login styles
export const InputContainer = styled(FormInputContainer)`
  grid-area: ${(props) => props.gridArea};
`;
