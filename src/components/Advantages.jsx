import Global from "../assets/images/global.webp";
import Cards from "../assets/images/cards.png";
import Coins from "../assets/images/coins.png";
import Logo1 from "../assets/images/logo1.svg";
import Logo2 from "../assets/images/logo2.svg";
import Logo3 from "../assets/images/logo3.svg";
import Logo4 from "../assets/images/logo4.svg";
import Logo5 from "../assets/images/logo5.svg";

export default function Advantages() {
  return (
    <>
      <section className="container mt-50">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <p className="text-xl text-[var(--primary-color)] mb-4 uppercase">
              Worldwide connectivity made simple
            </p>
            <h2 className="text-4xl font-bold text-white">
              Creating Accessible Digital Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
            {/* Box 1 */}
            <div className="bg-[var(--background-dark-gray)] rounded-xl shadow-lg overflow-hidden flex flex-col max-w-[420px] w-full">
              <div className="px-1 py-3 lg:p-5 flex flex-col justify-center items-center text-center gap-2 flex-grow">
                <h3 className="text-2xl text-white font-semibold mt-5">
                  Global Presence
                </h3>
                <p className="text-[var(--text-light-gray)] mb-4 w-[70%]">
                  Available in 150+ regions with continuous expansion
                </p>
                <div className="cursor-pointer text-[var(--primary-color)] font-medium lg:mb-4">
                  Covered countries →
                </div>
              </div>
              <div className="bg-[var(--background-dark-gray)] h-48 min-h-[192px] relative">
                <img
                  src={Global}
                  alt="Global coverage"
                  className="w-full h-full object-contain absolute bottom-0"
                />
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-[var(--background-dark-gray)] rounded-xl shadow-lg overflow-hidden flex flex-col h-full max-w-[420px] w-full">
              <div className="px-1 py-3 lg:p-5 flex flex-col justify-center items-center text-center gap-2 flex-grow">
                <h3 className="text-2xl text-white font-semibold mt-5">
                  Payment Solutions
                </h3>
                <p className="text-[var(--text-light-gray)] mb-4 w-[70%]">
                  Supporting 40+ major payment gateways worldwide
                </p>
                <div className="cursor-pointer text-[var(--primary-color)] font-medium lg:mb-4">
                  Payment options →
                </div>
              </div>
              <div className="h-48 flex items-end justify-center">
                <img
                  src={Cards}
                  alt="Payment methods"
                  className="max-h-48 object-contain max-w-full"
                />
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-[var(--background-dark-gray)] rounded-xl shadow-lg overflow-hidden flex flex-col max-w-[420px] w-full">
              <div className="px-1 py-3 lg:p-5 flex flex-col justify-center items-center text-center gap-2 flex-grow">
                <h3 className="text-2xl text-white font-semibold mt-5">
                  Digital Assets
                </h3>
                <p className="text-[var(--text-light-gray)] mb-4 w-[70%]">
                  Integrated with 110+ blockchain protocols & networks
                </p>
                <div className="cursor-pointer text-[var(--primary-color)] font-medium lg:mb-4">
                  Supported assets →
                </div>
              </div>
              <div className="bg-[var(--background-dark-gray)] h-48 min-h-[192px] relative">
                <img
                  src={Coins}
                  alt="Crypto assets"
                  className="w-full h-full object-contain absolute bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-col justify-center items-center gap-5 mt-15">
        {/* Text mit Linien */}
        <div className="relative w-full mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-400"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-white uppercase">
              Trusted by{" "}
              <span className="text-[var(--primary-color)]">50+</span>
              industry leaders
            </span>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-4 sm:justify-between w-full">
          {/* Bei kleinen Bildschirmen (< 640px) nimmt jedes Logo 33% der Breite ein (3 pro Zeile) */}
          {/* Bei größeren Bildschirmen bleibt die ursprüngliche Anordnung (5 in einer Reihe) */}
          <div className="w-1/3 sm:w-auto flex justify-center">
            <img src={Logo1} alt="logo1" className="h-8" />
          </div>
          <div className="w-1/3 sm:w-auto flex justify-center">
            <img src={Logo2} alt="logo2" className="h-8" />
          </div>
          <div className="w-1/3 sm:w-auto flex justify-center">
            <img src={Logo3} alt="logo3" className="h-8" />
          </div>
          <div className="w-1/3 sm:w-auto flex justify-center">
            <img src={Logo4} alt="logo4" className="h-8" />
          </div>
          <div className="w-1/3 sm:w-auto flex justify-center">
            <img src={Logo5} alt="logo5" className="h-8" />
          </div>
        </div>
      </section>
    </>
  );
}
