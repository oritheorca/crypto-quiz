/** @format */

export const colors: { [color: string]: string } = {
  red: "#EE002A",
  blue: "#005FB0",
  green: "#27AE60",
  yellow: "#F2C94C",
  darkRed: "#D50011",
  darkBlue: "#004697",
  darkGreen: "#007820",
  darkYellow: "#D9B033",
  black: "#1b1b1b",
  gray: "#828282",
  lightGray: "#E0E0E0",
  orange: "#F95400",
  aqua: "#2D9CDB",
  purple: "#9B51E0",
  white: "#fff",
};

export const coinColors: { [coin: string]: string } = {
  "Binance Coin": "#f3ba2f",
  Bitcoin: "#f2a900",
  "Bitcoin Cash": "#F59332",
  Dogecoin: "#d9bd62",
  Ethereum: "#3c3c3d",
  Libra: "#42318C",
  Ripple: "#0f72e5",
  Zcash: "#F8BB02",
};

export const buttonBoxShadow = `
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25), inset 0px 0px 30px rgba(0, 0, 0, 0.1);
`;

export const buttonWithHover = `
  transition: box-shadow .25s ease, transform .25s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5), inset 0px 0px 24px rgba(0, 0, 0, 0.2);
    transform: translate3d(0,-3px,0);
  }
`;
