import styled from "styled-components";
import { FormInput } from "../Login/Login.styles";
import { Send } from "@styled-icons/boxicons-solid/Send";

//grid for form
export const ContactGrid = styled.div`
  display: grid;
  grid-template-areas:
    "firstName lastName"
    "email email"
    "message message";
  column-gap: 4rem;

  @media (max-width: 768px) {
    grid-template-areas:
      "firstName"
      "lastName"
      "email"
      "message";
  }
`;

// textarea
export const TextArea = styled(FormInput).attrs({ as: "textarea" })`
  height: 8rem;
`;

// send icon
export const SendIcon = styled(Send).attrs({ size: 18 })`
  position: relative;
  top: -1px;
`;
