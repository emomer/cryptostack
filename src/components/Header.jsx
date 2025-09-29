import { useState, useEffect } from "react";
import Logo from "../assets/images/cryptostack-logo.png";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fensterbreite überwachen
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Menü zuklappen, wenn in den Desktop‑Mode gewechselt wird
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <div className="container relative flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-8" />
          <span className="text-white text-[22px] font-bold">
            crypto<span className="text-[var(--primary-color)]">stack</span>
          </span>
        </a>

        {/* Desktop‑Navigation */}
        {!isMobile && (
          <>
            <nav>
              <ul className="flex gap-7 text-white">
                <li className="nav-links">
                  <a href="#">Buy Crypto</a>
                </li>
                <li className="nav-links">
                  <a href="#">Sell Crypto</a>
                </li>
                <li className="nav-links">
                  <a href="#">Markets</a>
                </li>
                <li className="nav-links">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-3">
              <button className="btn bg-white">Login</button>
              <button className="btn bg-[var(--primary-color)] text-white">
                Sign Up
              </button>
            </div>
          </>
        )}

        {/* Mobile Burger */}
        {isMobile && (
          <button
            aria-label="toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-60"
          >
            {menuOpen ? (
              <IoMdClose size={28} className="text-white cursor-pointer" />
            ) : (
              <RxHamburgerMenu
                size={28}
                className="text-white cursor-pointer"
              />
            )}
          </button>
        )}
      </div>

      {/* Mobile‑Menü Layer */}
      <div
        className={`fixed top-13 left-0 w-full bg-black text-white overflow-hidden origin-top transition-all duration-300 ease-out ${
          menuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 4rem)" }}
      >
        <ul className="flex flex-col gap-2 py-4 text-center text-lg">
          <li className="border-b py-4">
            <a href="#">Buy Crypto</a>
          </li>
          <li className="border-b py-4">
            <a href="#">Sell Crypto</a>
          </li>
          <li className="border-b py-4">
            <a href="#">Markets</a>
          </li>
          <li className="py-4">
            <a href="#">Blog</a>
          </li>
          <li className="bg-white text-black py-3">
            <a href="#">Login</a>
          </li>
          <li className="bg-[var(--primary-color)] py-3">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
