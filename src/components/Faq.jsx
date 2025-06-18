import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqData = [
    {
      question: "How can I start trading on CryptoStack?",
      answer:
        "Getting started with CryptoStack is simple. First, create an account on our website or download our mobile app. Complete the verification process by submitting your KYC documents. Once verified, deposit funds using bank transfer, credit card, or cryptocurrency. Navigate to the trading section, select your preferred cryptocurrency pair, and start trading with our intuitive interface.",
    },
    {
      question: "Where can I use CryptoStack?",
      answer:
        "CryptoStack is available globally with service in over 190 countries. Our platform supports multiple languages and currencies. You can access CryptoStack through our web platform, desktop application (Windows, Mac, Linux), or mobile apps (iOS and Android). Some features may be limited in certain jurisdictions due to regulatory requirements.",
    },
    {
      question: "What markets are supported on CryptoStack?",
      answer:
        "CryptoStack offers a wide range of cryptocurrency markets including Bitcoin, Ethereum, and over 200 altcoins. We support spot trading, futures markets with up to 100x leverage, margin trading, and staking options. Our platform also features unique token pairs and emerging cryptocurrency projects after thorough vetting for security and viability.",
    },
    {
      question:
        "What makes CryptoStack both highly responsive and lightweight?",
      answer:
        "CryptoStack is built on a proprietary trading engine developed specifically for high-frequency trading and minimal latency. Our architecture utilizes WebSocket connections for real-time data updates, distributed servers for load balancing, and efficient data compression algorithms. The user interface is optimized to consume minimal resources while providing lightning-fast execution even during high market volatility.",
    },
    {
      question: "What order execution tools are available on CryptoStack?",
      answer:
        "CryptoStack provides a comprehensive suite of order execution tools including market orders, limit orders, stop orders, OCO (One Cancels Other), trailing stops, and time-weighted average price (TWAP) algorithms. Advanced traders can utilize our API for algorithmic trading, custom order types, and automated strategies. Our Smart Routing technology ensures best price execution across multiple liquidity pools.",
    },
  ];

  return (
    <section className="mt-50 flex flex-col items-center">
      <h2 className="mb-12 text-5xl font-bold text-white">FAQs</h2>

      <div className="container max-w-3xl">
        {faqData.map((faq, i) => (
          <div key={i} className="border-b border-gray-700 last:border-none">
            {/* Frage-Zeile */}
            <button
              onClick={() => toggleFaq(i)}
              className="w-full flex items-center justify-between py-6 text-left"
            >
              <span className="text-lg text-white">{faq.question}</span>

              {/* Pfeil */}
              <IoIosArrowDown
                size={26}
                className={`text-white transform transition-transform duration-300 ${
                  openFaq === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Antwort */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openFaq === i
                  ? "max-h-96 opacity-100 pb-6"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
