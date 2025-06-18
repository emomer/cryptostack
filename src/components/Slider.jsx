import Marquee from "react-fast-marquee";
import btc from "../assets/images/bitcoin.png";
import eth from "../assets/images/ethereum.svg";
import bnb from "../assets/images/binance.png";
import sol from "../assets/images/solana.png";
import ada from "../assets/images/cardano.webp";
import xrp from "../assets/images/xrp.png";
import dot from "../assets/images/polkadot.png";
import doge from "../assets/images/dogecoin.png";

const cryptoLogos = [
  { name: "Bitcoin", symbol: "BTC", logo: btc },
  { name: "Ethereum", symbol: "ETH", logo: eth },
  { name: "BNB", symbol: "BNB", logo: bnb },
  { name: "Solana", symbol: "SOL", logo: sol },
  { name: "Cardano", symbol: "ADA", logo: ada },
  { name: "XRP", symbol: "XRP", logo: xrp },
  { name: "Polkadot", symbol: "DOT", logo: dot },
  { name: "Dogecoin", symbol: "DOGE", logo: doge },
];

export default function Slider() {
  return (
    <div className="mt-20">
      <div className="container mx-auto px-2">
        <Marquee
          speed={30} // px pro Sekunde
        >
          {cryptoLogos.map((crypto) => (
            <div className="mx-6 md:mx-15 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <img
                  src={crypto.logo}
                  alt={`${crypto.name} Logo`}
                  className="h-14 md:h-18 w-14 md:w-18 object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
