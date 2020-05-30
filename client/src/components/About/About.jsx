import React from "react";
import * as Lsc from "../Login/Login.styles";
import * as sc from "./About.styles";
import { Link } from "react-router-dom";
import img from "../../assets/about-blood.webp";

const About = () => {
  return (
    <Lsc.BackgroundDiv as="article">
      <sc.AboutContainer>
        <sc.aboutGrid>
          <sc.TextContainer>
            <Lsc.LoginHeader>
              <sc.AboutIcon size={30} /> About Us
            </Lsc.LoginHeader>
            <sc.TextSection>
              <p>
                We are a youth-run organization and provides free help and
                especially work to target the poor and the needy. we act as a
                channel connecting voluntary blood donors with those who need
                blood.
              </p>
              <p>
                We organize blood donation camps in various locations in the
                country. We believe that organizing camps are the fastest way to
                solving the problem of blood shortage.
              </p>
              <p>
                Someone needs blood and is not able to arrange a donor? Click
                the button below to register and raise a request
              </p>
            </sc.TextSection>
            <sc.AboutButton
              style={{ display: "inline-block" }}
              as={Link}
              to="/register"
            >
              Register
            </sc.AboutButton>
          </sc.TextContainer>
          <sc.ImageContainer>
            <img src={img} alt="" />
          </sc.ImageContainer>
        </sc.aboutGrid>
      </sc.AboutContainer>
    </Lsc.BackgroundDiv>
  );
};

export default About;
