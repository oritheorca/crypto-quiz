/** @format */

import React from "react";
import styled from "styled-components/macro";
import about from "./content/images/illos/about.png";
import ResultsHeader from "./ResultsHeader";
import { colors } from "./ui";

const StyledContainer = styled.section`
  display: flex;
  text-align: left;
  padding: 2rem;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column-reverse;
  margin-bottom: 10rem;
`;

const StyledIllo = styled.img`
  object-fit: cover;
  max-width: 100%;
  flex-direction: row-reverse;
  margin-bottom: 4rem;

  @media (min-width: 800px) {
    width: 100%;
    flex: 1;
    flex-direction: row;
    margin-bottom: 0;
  }
`;

const StyledText = styled.section`
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 800px) {
    min-width: 280px;
    margin: 0 2rem 0 0;
  }
`;

const StyledName = styled.h3`
  text-transform: uppercase;
  font-size: 3.2rem;
  font-family: "Gochi Hand";
  margin-bottom: 0.2rem;
`;

const StyledLink = styled.a`
  margin-bottom: 0;
  color: ${colors.green};
  text-decoration: underline;
  font-weight: bold;
`;

const StyledDesc = styled.p`
  line-height: 4rem;
  margin: 0 0 0 0;
`;

const StyledBios = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledBio = styled.section`
  min-width: 250px;
`;

export default function About() {
  return (
    <section>
      <ResultsHeader>About the team</ResultsHeader>
      <StyledContainer>
        <StyledText>
          <StyledDesc>
            Hi! We’re Grace and Yutaro, a two-dev team based in Harajuku, and we
            made this quiz to help people learn about cryptocurrencies in a
            light-hearted way.
          </StyledDesc>
          <StyledBios>
            <StyledBio>
              <StyledName>Grace Kwan</StyledName>
              <StyledDesc>Interaction Designer @ IDEO</StyledDesc>
              <StyledLink
                href="https://gracekwan.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                gracekwan.com
              </StyledLink>
            </StyledBio>
            <StyledBio>
              <StyledName>Yutaro Mori</StyledName>
              <StyledDesc>Ethereum Contributor</StyledDesc>
              <StyledLink
                href="https://twitter.com/rawfalafel?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rawfalafel
              </StyledLink>{" "}
              on Twitter
            </StyledBio>
          </StyledBios>
        </StyledText>
        <StyledIllo src={about} alt="Authors: Yutaro Mori & Grace Kwan" />
      </StyledContainer>
    </section>
  );
}
