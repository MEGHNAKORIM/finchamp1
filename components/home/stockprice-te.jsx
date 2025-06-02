"use client";

import React, { useState, useEffect } from 'react';
import predefinedStocks from '../../public/data/predefinedStocks.json';
import fullStockData from '../../public/data/fullstockdata.json';
import '../../styles/components/home/stockprice.css';

const StockPriceCheckerTe = () => {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState(null);
  const [error, setError] = useState('');
  const [allStocks, setAllStocks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setAllStocks(fullStockData);
  }, []);

  const handleSearch = () => {
    if (symbol.trim() === '') {
      setError('దయచేసి స్టాక్ చిహ్నాన్ని నమోదు చేయండి.');
      return;
    }

   
    const foundStock = allStocks.find((stock) => stock.symbol === symbol.toUpperCase());
    if (foundStock) {
      setSearchResults((prevResults) => [...prevResults, foundStock]);
      setError('');
    } else {
      setError(`No data found for symbol ${symbol}.`);
    }
    setSymbol('');
  };

  const handleChange = (event) => {
    setSymbol(event.target.value.toUpperCase()); // Ensure symbol is uppercase
  };

  // Function to determine color based on stock price
  const getColorForPrice = (stockPrice) => {
    return stockPrice >= 100 ? 'green' : 'red';
  };

  return (
    <div className="stock-price-checker">
      <h2>స్టాక్ ధర చెకర్</h2>
      <div className="search-bar">
        <label>
          <input placeholder="స్టాక్ చిహ్నాన్ని నమోదు చేయండి" type="text" value={symbol} onChange={handleChange} />
        </label>
        <button onClick={handleSearch} className="button">వెతకండి</button>
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="search-results">
        {searchResults.map((stock, index) => (
          <div key={index} className="stock-result">
            <h3>కోసం స్టాక్ ధర {stock.symbol}:</h3>
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

export default StockPriceCheckerTe;
