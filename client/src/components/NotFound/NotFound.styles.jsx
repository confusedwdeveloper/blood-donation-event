import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  font-weight: 300;
  color: #fffffe;
  font-size: 1.2em;
  text-decoration: none;
  border: 1px solid #efefef;
  padding: 0.5em;
  border-radius: 3px;
  transition: all 0.3s linear;
  display: block;
  text-align: center;
  width: 60%;
  margin: auto;
  margin-top: 3rem;

  &:hover {
    opacity: 0.8;
    color: inherit;
    border-color: #b8c1ec;
  }
`;
export const Header = styled.h1`
  text-align: center;
  font-size: 10rem;
  font-weight: 8;
  color: #fffffe;

  @media (max-width: 425px) {
    font-size: 6rem;
  }
`;

export const Prargraph = styled.p`
  text-align: center;
  && {
    font-size: 3rem;
  }

  @media (max-width: 425px) {
    && {
      font-size: 1.2rem;
    }
  }
`;
