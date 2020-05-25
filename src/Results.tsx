/** @format */

import React, { useState } from "react";
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
import { coinIcons, coinIllos, coinLogos } from "./content/coinImages";
import coins, { descriptions, nicknames } from "./content/coins";
import { getQuote, getTwitterText, hashtags, related, shareUrl } from "./sms";
import { Points } from "./types";
import { colors } from "./ui";

const StyledResults = styled.section`
  text-align: center;
`;

const StyledMatch = styled.p`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Gochi Hand";
`;

const StyledResultsBox = styled.div`
  display: flex;
  border-bottom: 4px solid ${colors.gray};
  margin-bottom: 4rem;
  padding-bottom: 2rem;
`;

const StyledLogoRetake = styled.div`
  display: flex;
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
  margin-left: 3rem;
`;

const StyledLogo = styled.img`
  height: 70px;
  object-fit: contain;
`;

const StyledShareButtons = styled.section`
  display: flex;
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

  &:active {
    filter: brightness(70%);
  }
`;

const StyledNickname = styled.h2`
  font-size: 2rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 0;
  font-size: 16px;
  color: white;
  border: none;
  margin-bottom: 0;
  background-color: ${colors.orange};
  cursor: pointer;
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
  max-width: 80px;
`;

const StyledCoinsHeader = styled.h2`
  font-size: 2rem;
`;

const StyledPoints = styled.p`
  font-size: 1.6rem;
`;

export default function Results({
  restartGame,
  score,
}: {
  restartGame: () => void;
  score: Points;
}) {
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

  const [displayedCoin, setDisplayed] = useState<string>(getWinningCoin());
  const [isCopied, setCopied] = useState(false);

  function onCopyClick() {
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  function changeDisplayed(coin: string) {
    setDisplayed(coin);
  }

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
            <StyledButton onClick={restartGame}>
              <MdRefresh size={20} style={{ marginRight: 12 }} />
              Retake Quiz
            </StyledButton>
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
          </StyledShareButtons>
        </StyledIlloDesc>
      </StyledResultsBox>

      <section>
        <StyledCoinsHeader>Meet the rest of the class:</StyledCoinsHeader>
        {coinsByScore.map((coin) => (
          <StyledThumbButton key={coin} onClick={() => changeDisplayed(coin)}>
            <StyledThumb src={coinIcons[coin]} alt={coin} />
            <StyledPoints>{score[coin]}</StyledPoints>
          </StyledThumbButton>
        ))}
      </section>
    </StyledResults>
  );
}
