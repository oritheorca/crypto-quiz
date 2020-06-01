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
import { getQuote, getTwitterText, hashtags, related, shareUrl } from "./sms";
import { buttonBoxShadow, colors } from "./ui";

const StyledShareText = styled.p`
  color: white;
  font-size: 18px;
  font-family: "Gochi Hand";
`;

const StyledShareButtons = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
`;

const shareButtonStyles = `
  display: flex;
  align-items: center;
  border-radius: 20px;
  font-size: 18px;
  color: white;
  margin: 0 9px 18px 9px;
  padding: 0 18px !important;
  overflow: hidden;
  border: none;
  font-family: 'Gochi Hand';
  ${buttonBoxShadow};
  height: 64px;

  &:active {
    filter: brightness(70%);
  }
`;

const StyledButton = styled.button`
  ${shareButtonStyles}
  background-color: ${colors.orange};
`;

const StyledCopyLinkButton = styled.button`
  ${shareButtonStyles};
  background-color: ${colors.red};

  &:active {
    background-color: brightness(70%);
  }
`;

const StyledTwitterButton = styled(TwitterShareButton)`
  ${shareButtonStyles}
  background-color: rgb(0, 172, 237) !important;
  padding-right: 24px !important;
  padding-left: 8px !important;
`;

const StyledFacebookButton = styled(FacebookShareButton)`
  ${shareButtonStyles}
  background-color: rgb(59, 89, 152) !important;
  padding-left: 8px !important;
  padding-right: 24px !important;
`;

export default function ShareButtons({
  displayedCoin,
  restartGame,
}: {
  displayedCoin: string;
  restartGame: () => void;
}) {
  const [isCopied, setCopied] = useState(false);

  function onCopyClick() {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
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
            <FaCheck color="white" size={30} style={{ marginRight: 16 }} />
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
  );
}
