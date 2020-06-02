const coins = [
  "Binance Coin",
  "Bitcoin",
  "Bitcoin Cash",
  "Dogecoin",
  "Ethereum",
  "Libra",
  "Ripple",
  "Zcash",
];

export const descriptions: { [coin: string]: string } = {
  Bitcoin:
    "You're the dependable class teacher. Bitcoin is the one cryptocurrency that everyone has heard about. Although it's simple compared to the newer cryptocurrencies, Bitcoin has a reputation for being the most reliable and easiest to understand. Nowadays, Bitcoin is marketed as digital gold: an alternative store of money.",

  "Bitcoin Cash":
    "In 2017, members of the Bitcoin community who strongly believed that Bitcoin should be optimized for everyday payments forked it into a separate cryptocurrency known as Bitcoin Cash. Though they claim that Bitcoin Cash is a more accurate representation of Bitcoin founder Satoshi Nakamoto’s original vision, they’ve struggled to gain widespread adoption. As a result, Bitcoin Cash tends to play second fiddle to the original Bitcoin.",

  Ethereum:
    "Back in 2015, the Bitcoin community was overflowing with ideas for how to make Bitcoin better. However, Bitcoin’s conservative approach to development made it difficult for developers to realize those ideas. Eventually, a group of Bitcoiners created a cryptocurrency called Ethereum that supports a built-in programming language, which unlocked brand-new use cases such as decentralized exchanges and decentralized autonomous organizations. Now, Ethereum has the second-largest market cap and boasts a vibrant community of developers eager to push the boundaries of cryptocurrency. BUIDL!",

  Libra:
    "In 2019, Facebook announced a new cryptocurrency called Libra that claims to make simple, safe, and affordable payments possible across borders. Unlike other cryptocurrencies, Libra doesn’t have its own “Libra coin,” but rather provides the benefits of decentralization for transactions with existing currencies, like the US dollar. Though its relationship with Facebook offers it a degree of clout, that same relationship makes the wider community a bit wary of this potential newcomer. Libra was originally scheduled to be released in 2020, but regulatory pushback has led some to wonder whether it’ll ever see the light of day.",

  "Binance Coin":
    "In 2017, a little-known startup launched a new cryptocurrency exchange, Binance, and corresponding token, Binance Coin. There were already a number of well-established exchanges, but Binance managed to outpace the competition thanks to its innovative approach. First of all, transactions on Binance were cheaper if you used Binance Coin, which increased demand for its own currency. Second, the CEO, CZ, is constantly tweeting. That might sound like actual high school behavior, but his down-to-earth personality and open communication with the community have won him a loyal following. In no time, Binance became the new “it kid”: the highest-volume exchange in the world.",

  Dogecoin:
    "In 2013, a bunch of internet trolls decided that it would be funny to create a cryptocurrency based on the internet meme Doge, which features a goofy-looking Shiba Inu. Though–or perhaps because–it was created as a joke, the mysterious workings of the internet catapulted it into the spotlight, and Dogecoin is still among the top 30 coins by market cap. The currency doesn’t have many practical applications, but it’s gained some traction as a way of handing out internet points and once even raised $55,000 to sponsor a NASCAR driver. Such wow, very money!",

  Zcash:
    "One of the defining features of most cryptocurrencies is that all transactions go into a public record called a ledger (link), which means that with some effort, they can be traced back to the participants. In 2016, Zcash made a huge splash by proving that transactions could be made totally private using zero-knowledge proofs, a cryptographic technique that was previously thought to have no practical use case. Aside from its promise of privacy, Zcash stands out for its academic culture, which some might call “totally nerdy.”",

  Ripple:
    "One of the claims to fame of most cryptocurrencies is decentralization: money that’s free from control by any one institution. In that sense, Ripple stands out in two ways: First, it proudly advertises its partnerships with large banks. Second, both its technology and its own currency, XRP, are highly centralized–in fact, the founders still own a large percentage of all the XRP on the market. It’s not necessarily a bad investment, but it might also be more than meets the eye…",
};

export const nicknames: { [coin: string]: string } = {
  Bitcoin: "The Old-School Teacher",

  "Bitcoin Cash": "The Insecure Substitute",

  Ethereum: "The Whiz Kid",

  Libra: "The Rich Jock",

  "Binance Coin": "The New Money",

  Dogecoin: "The Class Clown",

  Zcash: "The Bookworm",

  Ripple: "The Hustler",
};

export default coins;
