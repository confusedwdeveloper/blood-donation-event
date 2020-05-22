import styled from "styled-components";
import { Menu } from "@styled-icons/entypo/Menu";
import { DonateBlood } from "@styled-icons/boxicons-solid/DonateBlood";

// nav element
export const NavContainer = styled.nav`
  height: 10vh;
  width: 100vw;
  background: #232946;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 2rem;
  align-items: center;

  h1 a {
    color: #fffffe;
  }

  h1 {
    cursor: pointer;
    font-size: 2rem;
  }

  a {
    color: #b8c1ec;
    text-decoration: none;
  }

  @media (max-width: 800px) {
    /* display: block; */
    h1 {
      margin: auto;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 425px) {
    h1 {
      margin-left: 2rem;
      font-size: 1.3rem;
    }
  }
`;
// hamburger menu
export const MenuIcon = styled(Menu)`
  display: none;
  color: #fffffe;

  @media (max-width: 800px) {
    display: inline-block;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }
`;

// link container
export const LinkContainer = styled.ul`
  list-style: none;
  min-width: 35vw;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  li a {
    transition: hover 0.3s ease-in;
    &:hover {
      color: #fffffe;
    }
  }

  @media (max-width: 800px) {
    position: fixed;
    background: #232946;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: space-evenly;
    transition: clip-path 1s ease-out;
    clip-path: ${(props) =>
      props.menuClicked
        ? "circle(900px at 10% -10%)"
        : "circle(100px at 10% -70%)"};
    pointer-events: ${(props) => (props.menuClicked ? "all" : "none")};

    li {
      opacity: ${(props) => (props.menuClicked ? "1" : "0")};
      &:nth-child(1) {
        transition: opacity 0.5s ease 0.2s;
      }
      &:nth-child(2) {
        transition: opacity 0.5s ease 0.4s;
      }
      &:nth-child(3) {
        transition: opacity 0.5s ease 0.6s;
      }
      &:nth-child(4) {
        transition: opacity 0.5s ease 0.8s;
      }
    }
  }
`;

export const DonattionIcon = styled(DonateBlood)`
  @media (max-width: 500px) {
    display: none;
  }
`;
