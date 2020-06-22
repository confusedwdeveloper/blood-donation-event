import styled from "styled-components";
import { LoginButton as Button } from "../Login/Login.styles";

export const LoginButton = styled(Button)`
  margin-top: 0rem;
`;

export const DonorListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
  justify-content: space-between;
  margin-top: 3rem;
  &&& {
    font-size: 1rem;
  }
  & > div {
    width: 100%;
    max-width: max-content;
    display: grid;
    column-gap: 2rem;
    grid-template-areas:
      "name blood"
      "button button";
    @media (max-width: 500px) {
      grid-template-areas:
        "name"
        "blood"
        "button";
    }
    background: #fffffe;
    color: #232946;
    margin-bottom: 2rem;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
    transition: all 0.1s ease-in;
    padding: 1rem;
    &:hover {
      /* box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); */
      /* transform: scale(1.009); */
      border-left: 4px solid red;
    }
    p,
    h4 {
      transition: all 0.1s ease-in;
      &:hover {
        color: red;
      }
    }
  }
`;

export const GridDiv = styled.div`
  overflow-x: auto;
  grid-area: ${(props) => props.gridArea};
  p {
    color: ${(props) => props.redColor && "red"};
  }
`;
export const TimePara = styled.p`
  font-weight: 300;
  font-style: italic;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
`;

export const ErrorPara = styled.p`
  color: ${(props) => (props.error ? "#fffffe" : "inherit")};
  margin-top: 3rem;
`;
export const ModalContainer = styled.div`
  div {
    margin-bottom: 1rem;
    h4 {
      margin-bottom: 0.4rem;
      font-size: 1.2rem;
    }
    p {
      &&& {
        font-size: 1rem;
        font-size: ${(props) => props.bold && "1.8rem"};
        font-weight: ${(props) => props.bold && "600"};
      }
    }
  }
`;

// export const ModalDiv = styled.div``;
