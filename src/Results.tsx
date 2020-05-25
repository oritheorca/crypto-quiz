/** @format */

import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaLink } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import styled from "styled-components/macro";
import coinIllos from "./content/coinIllos";
import { coinLogos } from "./content/coinImages";
import { descriptions } from "./content/coins";
import Progress from "./Progress";
import { getQuote, hashtags, related, shareUrl } from "./sms";
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

const StyledWinner = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 0;
  text-align: left;
`;

const StyledFlexbox = styled.div`
  display: flex;
`;

const StyledLogoRetake = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIllo = styled.img`
  object-fit: contain;
  max-width: 300px;
  max-height: 450px;
`;

const StyledDescription = styled.p`
  text-align: left;
  font-size: 1.4rem;
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
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
  padding-right: 20px !important;
  border: none;
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
  font-size: 20px;
  font-weight: bold;
`;

export default function Results({
  restartGame,
  winner,
  score,
}: {
  restartGame: () => void;
  winner: string;
  score: Points;
}) {
  return (
    <StyledResults>
      <StyledMatch>You are...</StyledMatch>
      <Progress score={score} />
      <StyledFlexbox>
        <StyledIllo src={coinIllos[winner]} alt="" />
        <StyledIlloDesc>
          <StyledLogoRetake>
            <StyledLogo src={coinLogos[winner]} alt="" />
            <StyledButton onClick={restartGame}>
              <MdRefresh size={20} style={{ marginRight: 12 }} />
              Retake Quiz
            </StyledButton>
          </StyledLogoRetake>
          <StyledDescription>{descriptions[winner]}</StyledDescription>
          <StyledShareButtons>
            <StyledTwitterButton
              url={shareUrl}
              title={getQuote(winner)}
              hashtags={hashtags}
              related={related}
              resetButtonStyle
            >
              <TwitterIcon />
              <StyledShareText>Tweet</StyledShareText>
            </StyledTwitterButton>
            <StyledFacebookButton
              url={shareUrl}
              quote={getQuote(winner)}
              hashtag={hashtags[0]}
              resetButtonStyle
            >
              <FacebookIcon />
              <StyledShareText>Share</StyledShareText>
            </StyledFacebookButton>
            <CopyToClipboard text={shareUrl}>
              <StyledCopyLinkButton>
                <FaLink color="white" size={30} style={{ marginRight: 16 }} />
                Copy Link
              </StyledCopyLinkButton>
            </CopyToClipboard>
          </StyledShareButtons>
        </StyledIlloDesc>
      </StyledFlexbox>
    </StyledResults>
  );
}
