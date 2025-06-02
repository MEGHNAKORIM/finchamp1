"use client";

import React, { useState, useEffect } from 'react';
import predefinedStocks from '../../public/data/predefinedStocks.json';
import fullStockData from '../../public/data/fullstockdata.json';
import '../../styles/components/home/stockprice.css';

const StockPriceChecker = () => {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');
  const [allStocks, setAllStocks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate fetching data from JSON file (replace with actual fetch call if needed)
    setAllStocks(fullStockData);
  }, []);

  const handleSearch = () => {
    if (symbol.trim() === '') {
      setError('Please enter a stock symbol.');
      return;
    }

    // Find the stock data for the entered symbol
    const foundStock = allStocks.find((stock) => stock.symbol === symbol.toUpperCase());
    if (foundStock) {
      // Add the found stock to search results
      setSearchResults((prevResults) => [...prevResults, foundStock]);
      setError('');
    } else {
      setError(`No data found for symbol ${symbol}.`);
    }
    // Clear symbol input after each search
    setSymbol('');
  };

  const handleChange = (event) => {
    setSymbol(event.target.value.toUpperCase()); // Ensure symbol is uppercase
  };

  // Function to determine color based on stock price
  const getColorForPrice = (stockPrice) => {
    return stockPrice >= 100 ? 'green' : 'red'; // Example threshold: price >= 100 is green, otherwise red
  };

  return (
    <div className="stock-price-checker">
      <h2>Stock Price Checker</h2>
      <div className="search-bar">
        <label>
          <input placeholder="Enter stock symbol" type="text" value={symbol} onChange={handleChange} />
        </label>
        <button onClick={handleSearch} className="button">Search</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="search-results">
        {searchResults.map((stock, index) => (
          <div key={index} className="stock-result">
            <h3>Stock Price for {stock.symbol}:</h3>
            <p className={`stock-price ${getColorForPrice(stock.price)}`}>${stock.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="predefined-stocks">
     
        <ul className="stock-list">
          {predefinedStocks.map((stock, index) => (
            <li key={index}>
              {stock.symbol}: <span className={`stock-price ${getColorForPrice(stock.price)}`}>${stock.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockPriceChecker;
