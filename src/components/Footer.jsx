import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import GooglePlay from "../assets/images/downloadgoogleplay.png";
import AppStore from "../assets/images/downloadappstore.png";

export default function Footer() {
  return (
    <footer className="text-white py-10 mt-25">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col mb-8 sm:flex-row sm:gap-5 lg:flex-col">
            <div className="flex items-center mb-4">
              <h3 className="text-xl md:text-2xl font-700 mr-4">
                crypto<span className="text-[var(--primary-color)]">stack</span>
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-white hover:text-[var(--primary-color)]"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[var(--primary-color)]"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[var(--primary-color)]"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[var(--primary-color)]"
                >
                  <FaYoutube size={20} />
                </a>
              </div>
            </div>
            <div className="flex gap-3 sm:mt-0">
              <a href="#">
                <img className="h-10" src={GooglePlay} alt="googleplay" />
              </a>
              <a href="#">
                <img className="h-10" src={AppStore} alt="appstore" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:w-4/6">
            <div>
              <h4 className="text-base md:text-xl font-semibold mb-3">
                Discover
              </h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Buy crypto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Sell crypto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    View markets
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Staking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-xl font-semibold mb-3">
                Information
              </h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Fees
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Pro mode
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-xl font-semibold mb-3">
                Account
              </h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    View wallet
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base md:text-xl font-semibold mb-3">Legal</h4>
              <ul className="flex flex-col gap-2 text-sm md:text-base">
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Cookie policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#21bf73]">
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
