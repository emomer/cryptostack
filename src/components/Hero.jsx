// src/components/Hero.jsx
import { useState } from "react";
import HeroImg from "../assets/images/hero-img.png";
import Particles from "./Particles";
import { useEffect } from "react";

export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => removeEventListener("resize", onResize);
  }, []);

  return (
    <section className="relative isolate mt-40 flex items-center">
      <Particles amount={100} />

      {width > 1029 ? (
        <div className="container flex items-center justify-between relative z-10">
          {/* Left */}
          <div className="flex max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] flex-col">
            <h1 className="mb-4 text-white lg:text-xl xl:text-4xl font-bold leading-tight">
              Invest in your future with confidence and secure your&nbsp;
              <span className="text-[var(--primary-color)]">
                financial freedom
              </span>
            </h1>
            <p className="mb-8 text-white/80">
              Take advantage of user-friendly tools and cutting-edge security
              features to stay ahead in the market. Join our community of savvy
              investors and experience a new era of financial growth.
            </p>
            <button className="btn w-40 bg-[var(--primary-color)] hover:bg-[var(--hover-color-green)] font-semibold text-white">
              Start Now
            </button>
          </div>

          {/* Right */}
          <div className="lg:max-w-[400px] xl:max-w-[450px]">
            <img
              src={HeroImg}
              alt="Coins Circle"
              className="animate-[spin_120s_linear_infinite]"
            />
          </div>
        </div>
      ) : (
        <div className="container flex flex-col items-center relative z-10">
          {/* Left */}
          <div className="flex max-w-[600px] flex-col items-center text-center">
            <h1 className="mb-5 text-white text-4xl font-bold leading-tight">
              Invest in your future with confidence and secure your&nbsp;
              <span className="text-[var(--primary-color)]">
                financial freedom
              </span>
            </h1>
            <p className="mb-10 text-white/80">
              Take advantage of user-friendly tools and cutting-edge security
              features to stay ahead in the market. Join our community of savvy
              investors and experience a new era of financial growth.
            </p>
            <button
              className={`py-2 px-6 border-none rounded-[8px] cursor-pointer tracking-[1px] font-bold bg-[var(--primary-color)] hover:bg-[var(--hover-color-green)] font-semibold text-white ${
                width < 476 ? "text-[0.9rem]" : "text-[1rem]"
              }`}
            >
              Start Now
            </button>
          </div>

          {/* Right */}
          <div className="max-w-[450px] mt-20">
            <img
              src={HeroImg}
              alt="Coins Circle"
              className="animate-[spin_120s_linear_infinite]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
