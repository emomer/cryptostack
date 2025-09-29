import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const CryptoTable = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [view, setView] = useState("all"); // 'all' oder 'favorites'
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(null);
  const [debugInfo, setDebugInfo] = useState("");

  const addDebugInfo = (info) => {
    console.log(info);
    setDebugInfo((prev) => `${prev}\n${info}`);
  };

  // Fetch crypto daten
  const fetchCryptos = async () => {
    try {
      addDebugInfo("Fetching cryptocurrency data...");
      const response = await fetch("/.netlify/functions/cryptos");

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      addDebugInfo(`${data.data.length} cryptocurrencies loaded`);
      setCryptos(data.data);

      // Load saved favorites from localStorage
      try {
        const savedFavorites = localStorage.getItem("cryptoFavorites");
        if (savedFavorites) {
          const parsedFavorites = JSON.parse(savedFavorites);
          addDebugInfo(
            `${parsedFavorites.length} favorites loaded from localStorage`
          );
          setFavorites(parsedFavorites);
        }
      } catch (err) {
        addDebugInfo(`Error loading favorites: ${err.message}`);
      }

      setLoading(false);
    } catch (error) {
      addDebugInfo(`Error fetching cryptocurrency data: ${error.message}`);
      setError("Error loading data: " + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptos();
  }, []);

  // Favorites speichern wenn etwas geändert wird
  useEffect(() => {
    try {
      localStorage.setItem("cryptoFavorites", JSON.stringify(favorites));
    } catch (err) {
      addDebugInfo(`Error saving favorites: ${err.message}`);
    }
  }, [favorites]);

  // Notification nach 3
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const toggleFavorite = (id, name) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
      setNotification(`${name} removed from favorites`);
    } else {
      setFavorites([...favorites, id]);
      setNotification(`${name} added to favorites`);
    }
  };

  const displayedCryptos =
    view === "favorites"
      ? cryptos.filter((crypto) => favorites.includes(crypto.id))
      : cryptos;

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 text-white">
        <p className="text-base sm:text-2xl">Loading cryptocurrency data...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-red-500 text-base sm:text-2xl">{error}</p>
        <button
          onClick={fetchCryptos}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm sm:text-base"
        >
          Reload
        </button>
      </div>
    );

  return (
    <section className="text-white container mt-50">
      {/* View switch */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg sm:text-2xl font-bold">
          Top 10 Cryptocurrencies
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <button
            onClick={() => setView("all")}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded transition-colors text-sm sm:text-xl`}
            style={{
              backgroundColor: view === "all" ? "#21BF73" : "#333",
            }}
          >
            All
          </button>
          <button
            onClick={() => setView("favorites")}
            className={`px-2 sm:px-4 py-1 sm:py-2 rounded transition-colors text-sm sm:text-xl`}
            style={{
              backgroundColor: view === "favorites" ? "#21BF73" : "#333",
            }}
          >
            Favorites
          </button>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in text-xs sm:text-base">
          {notification}
        </div>
      )}

      {/* Crypto table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-xs sm:text-base md:text-lg lg:text-xl">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 sm:py-3 px-1 sm:px-2 text-left"></th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 text-left">#</th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 text-left">Name</th>
              <th className="py-2 sm:py-3 px-1 text-left">Price</th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left hidden lg:table-cell">
                24h %
              </th>
              <th className="py-2 sm:py-3 px-2 sm:px-4 text-left hidden md:table-cell">
                Market Cap
              </th>
              <th className="py-2 sm:py-3 px-1 sm:px-2 text-left hidden sm:table-cell"></th>
            </tr>
          </thead>
          <tbody>
            {displayedCryptos.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="py-4 text-center text-xs sm:text-base"
                >
                  {view === "favorites"
                    ? "No favorites selected"
                    : "No cryptocurrencies found"}
                </td>
              </tr>
            ) : (
              displayedCryptos.map((crypto, index) => {
                const priceChangePercent = parseFloat(
                  crypto.changePercent24Hr
                ).toFixed(2);
                const isPriceUp = parseFloat(priceChangePercent) >= 0;

                return (
                  <tr
                    key={crypto.id}
                    className="border-b border-gray-800 hover:bg-gray-900 transition-colors"
                  >
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <button
                        onClick={() => toggleFavorite(crypto.id, crypto.name)}
                        className="focus:outline-none cursor-pointer"
                      >
                        {favorites.includes(crypto.id) ? (
                          <FaStar className="text-yellow-400" size={18} />
                        ) : (
                          <FaRegStar
                            className="text-gray-400 hover:text-yellow-400"
                            size={18}
                          />
                        )}
                      </button>
                    </td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">{index + 1}</td>
                    <td className="py-2 sm:py-3 px-1 sm:px-2">
                      <div className="flex items-center">
                        <img
                          src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                          alt={`${crypto.name} logo`}
                          className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 rounded-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `/api/placeholder/32/32`;
                          }}
                        />
                        <div className="font-medium">{crypto.name}</div>
                        <div className="text-gray-400 ml-2 text-xs sm:text-base">
                          {crypto.symbol}
                        </div>
                      </div>
                    </td>
                    <td className="py-2 sm:py-3 px-1 font-medium">
                      ${parseFloat(crypto.priceUsd).toFixed(2)}
                    </td>
                    <td
                      className={`py-2 sm:py-3 px-2 sm:px-4 hidden lg:table-cell ${
                        isPriceUp ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {isPriceUp ? "+" : ""}
                      {priceChangePercent}%
                    </td>
                    <td className="py-2 sm:py-3 px-2 sm:px-4 hidden md:table-cell">
                      $
                      {(parseFloat(crypto.marketCapUsd) / 1000000000).toFixed(
                        2
                      )}{" "}
                      B
                    </td>
                    <td className="hidden sm:table-cell">
                      <button className="bg-[var(--primary-color)] hover:bg-[#22774e] text-white px-3 sm:px-5 py-1 rounded text-sm sm:text-lg hover:bg-opacity-90 cursor-pointer">
                        Buy
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CryptoTable;
