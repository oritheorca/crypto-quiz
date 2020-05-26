import React from "react";
import styled from "styled-components/macro";
import about from "./content/images/illos/about.jpg";

const StyledContainer = styled.section`
  display: flex;
  text-align: left;
  font-size: 1.2rem;
  flex-wrap: wrap;
`;

const StyledIllo = styled.img`
  max-width: 100%;

  @media (min-width: 1100px) {
    max-width: 660px;
  }
`;

const StyledName = styled.h3`
  text-transform: uppercase;
  font-size: 1.6rem;
  margin-bottom: 0;
`;

const StyledLink = styled.a`
  font-size: 1rem;
  margin-bottom: 0;
`;

const StyledDesc = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  text-transform: uppercase;
`;

const StyledText = styled.section`
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1100px) {
    margin-top: 2rem;
    max-width: 312px;
  }
`;

export default function About() {
  return (
    <section>
      <StyledTitle>About this project</StyledTitle>
      <StyledContainer>
        <StyledText>
          <StyledDesc>
            This quiz is a light-hearted weekend project by two devs based in
            Tokyo:
          </StyledDesc>
          <section>
            <StyledName>Yutaro Mori</StyledName>
            <StyledDesc>blockchain engineer</StyledDesc>
            <StyledLink>Twitter: @rawfalafel</StyledLink>
          </section>
          <section>
            <StyledName>Grace Kwan</StyledName>
            <StyledDesc>designer, engineer, illustrator</StyledDesc>
            <StyledLink>IG: @duckduckgrace_</StyledLink>
          </section>
        </StyledText>
        <StyledIllo src={about} alt="Authors: Yutaro Mori & Grace Kwan" />
      </StyledContainer>
    </section>
  );
}
