/** @format */

import React, { useState } from "react";
import ReactGA from "react-ga";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaCheck, FaLink } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components/macro";
import { coinIllos, coinLogos } from "./content/coinImages";
import coins, { descriptions, nicknames } from "./content/coins";
import { getQuote, getTwitterText, hashtags, related, shareUrl } from "./sms";
import { Points } from "./types";
import { colors } from "./ui";

const StyledResults = styled.section`
  text-align: center;
`;

const StyledMatch = styled.p`
  font-size: 2.4rem;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Gochi Hand";
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: 1100px) {
    margin-bottom: 0;
  }
`;

const StyledResultsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0rem;
  padding-bottom: 2rem;
  justify-content: center;
`;

const StyledLogoRetake = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledIlloContainer = styled.div`
  width: 300px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIllo = styled.img`
  object-fit: contain;
  max-width: 300px;
  max-height: 450px;
`;

const StyledDescription = styled.p`
  text-align: left;
  font-size: 1.3rem;
  line-height: 2.2rem;
`;
const StyledIlloDesc = styled.div`
  text-align: left;
  margin-top: 2rem;
  max-width: 100%;

  @media (min-width: 1100px) {
    margin-left: 3rem;
    max-width: 624px;
  }
`;

const StyledLogo = styled.img`
  height: 70px;
  object-fit: contain;
  max-width: 100%;
`;

const StyledShareButtons = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
`;

const shareButtonStyles = `
  display: flex;
  align-items: center;
  border-radius: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-right: 18px;
  padding-right: 18px !important;
  border: none;
  width: 166px;

  &:active {
    filter: brightness(70%);
  }
`;

const StyledNickname = styled.h2`
  font-size: 2rem;
`;

const StyledButton = styled.button`
  ${shareButtonStyles}
  background-color: ${colors.orange};
`;

const StyledCopyLinkButton = styled.button`
  ${shareButtonStyles};
  background-color: ${colors.red};
  font-weight: bold;
  width: 166px;

  &:active {
    background-color: brightness(70%);
  }
`;

const StyledTwitterButton = styled(TwitterShareButton)`
  ${shareButtonStyles}
  background-color: rgb(0, 172, 237) !important;
`;

const StyledFacebookButton = styled(FacebookShareButton)`
  ${shareButtonStyles}
  background-color: rgb(59, 89, 152) !important;
`;

const StyledShareText = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const StyledThumbButton = styled.button`
  border: none;
  margin-right: 4px;
`;
const StyledThumb = styled.img`
  max-width: 40px;
`;

const StyledCoinsHeader = styled.h2`
  font-size: 2rem;
`;

const StyledPoints = styled.p`
  font-size: 1.6rem;
`;

const StyledFlexbox = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function Results({
  restartGame,
  score,
}: {
  restartGame: () => void;
  score: Points;
}) {
  ReactGA.pageview(`/results`);

  function getWinningCoin() {
    let displayedCoin = coins[0];
    let winningScore = score[coins[0]];
    coins.forEach((coin) => {
      if (score[coin] > winningScore) {
        displayedCoin = coin;
        winningScore = score[coin];
      }
    });
    return displayedCoin;
  }

  const winningCoin = getWinningCoin();
  const [displayedCoin, setDisplayed] = useState<string>(winningCoin);
  const [isCopied, setCopied] = useState(false);

  function onCopyClick() {
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  function changeDisplayed(coin: string) {
    setDisplayed(coin);
  }

  ReactGA.event({
    category: "Quiz",
    action: "Results",
    label: winningCoin,
  });

  const coinsByScore = coins.sort((a, b) => score[b] - score[a]);

  return (
    <StyledResults>
      <StyledMatch>You are...</StyledMatch>
      <StyledResultsBox>
        <StyledIlloContainer>
          <StyledIllo src={coinIllos[displayedCoin]} alt="" />
        </StyledIlloContainer>
        <StyledIlloDesc>
          <StyledLogoRetake>
            <StyledLogo src={coinLogos[displayedCoin]} alt="" />
          </StyledLogoRetake>
          <StyledNickname>
            "{nicknames[displayedCoin].toUpperCase()}"
          </StyledNickname>
          <StyledDescription>{descriptions[displayedCoin]}</StyledDescription>
          <StyledShareButtons>
            <StyledTwitterButton
              url={shareUrl}
              title={getTwitterText(displayedCoin)}
              hashtags={hashtags}
              related={related}
              resetButtonStyle
            >
              <TwitterIcon />
              <StyledShareText>Tweet</StyledShareText>
            </StyledTwitterButton>
            <StyledFacebookButton
              url={shareUrl}
              quote={getQuote(displayedCoin)}
              hashtag={hashtags[0]}
              resetButtonStyle
            >
              <FacebookIcon />
              <StyledShareText>Share</StyledShareText>
            </StyledFacebookButton>
            <CopyToClipboard text={shareUrl} onCopy={onCopyClick}>
              <StyledCopyLinkButton>
                {isCopied ? (
                  <FaCheck
                    color="white"
                    size={30}
                    style={{ marginRight: 16 }}
                  />
                ) : (
                  <FaLink color="white" size={30} style={{ marginRight: 16 }} />
                )}
                {isCopied ? "Copied!" : "Copy Link"}
              </StyledCopyLinkButton>
            </CopyToClipboard>
            <StyledButton onClick={restartGame}>
              <MdRefresh size={30} style={{ marginRight: 16 }} />
              Retake
            </StyledButton>
          </StyledShareButtons>
        </StyledIlloDesc>
      </StyledResultsBox>
    </StyledResults>
  );
}
