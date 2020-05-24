import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserCircle } from "@styled-icons/boxicons-solid/UserCircle";
import { RegisterButton } from "../HomePage/HomePage.styles";

// outer div to set background
export const BackgroundDiv = styled.div`
  background: #232946;
  width: 100%;
  min-height: 90vh;
  color: #b8c1ec;
  overflow: auto;
`;

// container. prolly gonna reuse in other places as well
export const Container = styled.div`
  max-width: 70vw;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  overflow: hidden;
  padding: 0 2rem;
`;

export const LoginContainer = styled(Container)`
  p {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    @media (max-width: 550px) {
      font-size: 1rem;
      text-align: justify;
      line-height: 1.4;
    }
  }
`;

//icon
export const UserIcon = styled(UserCircle)``;

//login h2
export const LoginHeader = styled.h1`
  font-size: 2.2rem;
  color: #fffffe;
  margin-bottom: 1.2rem;
`;

// form
export const FormInputContainer = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 30px;
  width: 100%;
`;

//label
export const InputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: #b8c1ec;
`;

export const FormInput = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #b8c1ec;
  outline: 0;
  font-size: 1.2rem;
  color: #b8c1ec;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ ${InputLabel} {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ ${InputLabel} {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #b8c1ec;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-color: #fffffe;
  }
  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

// login button
export const LoginButton = styled(RegisterButton)`
  font-size: 1.2rem;
  border-radius: 0;
  cursor: pointer;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  margin-top: 1.3rem;
`;

// sign up Link
export const SignUpLink = styled(Link)`
  color: #fffffe;
  transition: color 0.25s ease;
  &:hover,
  &:focus {
    color: #b8c1ec;
  }
`;

//para
export const signUpPara = styled.p`
  margin-top: 1rem;
`;
