import styled from "styled-components";
import { Container } from "../Login/Login.styles";
import { CalendarCheck } from "@styled-icons/boxicons-solid/CalendarCheck";
import { InfoCircle } from "@styled-icons/boxicons-solid/InfoCircle";

export const DashboardContainer = styled(Container)`
  max-width: 94rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  column-gap: 3rem;

  div:last-child {
    h3 {
      color: #fffffe;
      font-size: 1.3rem;
    }
    p {
      font-size: 1.15rem;
      margin-top: 2rem;
    }
  }
`;

export const TextHeader = styled.h2`
  font-size: 2rem;
  color: #fffffe;
  margin-bottom: 1.2rem;
`;

// icon
export const Icon = styled(CalendarCheck)`
  position: relative;
  top: -2px;
`;

export const InfoIcon = styled(InfoCircle)`
  position: relative;
  top: -2px;
`;

// button container
export const ButtonDiv = styled.div`
  padding: 1.5rem 0 1rem;
  margin: 1rem 0 2rem;

  a:last-child {
    margin-left: 3rem;
  }
`;

//dropdown
export const Select = styled.select`
  display: inline-block;
  padding: 0.4rem 0.5rem;
  background: inherit;
  border: none;
  outline: none;
  border-radius: 3px;
  color: #b8c1ec;
  border-bottom: 1px solid #b8c1ec;
  font-size: 1.2rem;
  width: 100%;

  option {
    color: #b8c1ec;
    border-bottom: 1px solid #b8c1ec;
    font-size: 1.2rem;
    background: #232946;
    text-align: center;
  }
`;

export const DropdownLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem;
`;
