import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./coin";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("/api/prices");
        console.log(response.data);
        setPortfolio(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <div>
      {/* <h1>Crypto Portfolio Tracker</h1>
      {isLoading && <p>Loading portfolio...</p>}
      {error && <p>Error: {error.message}</p>}
      {!isLoading &&
        !error &&
        Array.isArray(portfolio) &&
        portfolio.length > 0 && (
          <div className="d-flex flex-wrap justify-content-around">
            {portfolio.map((coin) => (
              <Coin key={coin.id} {...coin} />
            ))}
          </div>
        )}

      {!isLoading && !error && portfolio.length === 0 && (
        <p>Your portfolio is currently empty.</p>
      )} */}
      <h1>Crypto Portfolio Tracker</h1>
      {fetchPortfolio()}
    </div>
  );
};

export default Portfolio;
