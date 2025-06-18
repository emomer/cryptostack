import advanced from "../assets/images/advanced.webp";
import { RxLightningBolt } from "react-icons/rx";
import { FiLock } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi";

export default function Advanced() {
  return (
    <section className="container flex flex-col items-center mt-50">
      <div className="flex flex-col  items-center justify-center max-w-[700px]">
        <div className="uppercase text-[var(--primary-color)] mb-[24px]">
          Advanced Trading Suite
        </div>
        <h2 className="text-white mb-[12px]">Features For Advanced Traders</h2>
        <p className="text-white text-center mb-[48px]">
          Utilize a suite of tools designed for deep technical analysis, custom
          price alerts, advanced order types, and ladder trading. Utilize a
          suite of tools designed for deep technical analysis.
        </p>
      </div>
      <img src={advanced} alt="Advanced" />;
      <div className="grid grid-col-1 sm:grid-cols-3 gap-15 mt-[2rem]">
        <div className="box">
          <RxLightningBolt
            className="mb-[1rem] sm:mb-[2rem] text-[var(--primary-color)]"
            size={50}
          />
          <h3 className="text-white mb-[0.5rem]">Advanced Trading Tools</h3>
          <p className="text-[var(--text-light-gray)]">
            Our goal is to provide professional-grade trading tools accessible
            to everyone — intuitive, powerful, and comprehensible.
          </p>
        </div>
        <div className="box">
          <FiLock
            className="mb-[1rem] sm:mb-[2rem] text-[var(--primary-color)]"
            size={50}
          />
          <h3 className="text-white mb-[0.5rem]">Promise for Performance</h3>
          <p className="text-[var(--text-light-gray)]">
            We develop reliable and practical solutions that deliver sustainable
            value and performance advantages for serious traders.
          </p>
        </div>
        <div className="box">
          <HiOutlineShieldCheck
            className="mb-[1rem] sm:mb-[2rem] text-[var(--primary-color)]"
            size={50}
          />
          <h3 className="text-white mb-[0.5rem]">Foundation of Trust</h3>
          <p className="text-[var(--text-light-gray)]">
            Our platform stands for verifiable security, compliance, and the
            highest regulatory standards.
          </p>
        </div>
      </div>
    </section>
  );
}
