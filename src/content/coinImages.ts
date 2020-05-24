import bch from "./images/icons/bch.png";
import bnb from "./images/icons/bnb.png";
import btc from "./images/icons/btc.png";
import dog from "./images/icons/dog.png";
import eth from "./images/icons/eth.png";
import lib from "./images/icons/lib.png";
import ripple from "./images/icons/ripple.jpg";
import zec from "./images/icons/zec.png";
import bnbLogo from "./images/logos/binance.png";
import btcLogo from "./images/logos/bitcoin.svg";
import bchLogo from "./images/logos/bitcoincash.png";
import dogLogo from "./images/logos/dogecoin.png";
import ethLogo from "./images/logos/ethereum.png";
import libLogo from "./images/logos/libra.png";
import rippleLogo from "./images/logos/ripple.jpg";
import zecLogo from "./images/logos/zcash.svg";

const coinImages: { [name: string]: string } = {
  "Binance Coin": bnb,
  Bitcoin: btc,
  "Bitcoin Cash": bch,
  Dogecoin: dog,
  Ethereum: eth,
  Libra: lib,
  Ripple: ripple,
  Zcash: zec,
};

export const coinLogos: { [name: string]: string } = {
  "Binance Coin": bnbLogo,
  Bitcoin: btcLogo,
  "Bitcoin Cash": bchLogo,
  Dogecoin: dogLogo,
  Ethereum: ethLogo,
  Libra: libLogo,
  Ripple: rippleLogo,
  Zcash: zecLogo,
};

export default coinImages;
