"use client";

import React, { useEffect, useState } from "react";
import StockContainer from "@/components/trade-app/StockContainer";
import Portfolio from "@/components/trade-app/Portfolio";
import SearchBar from "@/components/trade-app/SearchBar";
import FinHeader from "@/components/trade-app/finHeader";
import stocksData from "@/public/data/stocks.json";
import "@/styles/pages/fin.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TradingViewWidget from "@/components/trade-app/tradingView";
import Chatbot from "../ChatBot";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech"); // Initial filterBy state
  const [budget, setBudget] = useState(5000); // Initial budget

  useEffect(() => {
    setStocks(stocksData);
  }, []);

  function handleAddStock(stockToAdd) {
    const stockInPortfolio = portfolio.find((stock) => stock.id === stockToAdd.id);
    if (!stockInPortfolio && budget >= stockToAdd.price) {
      setPortfolio([...portfolio, { ...stockToAdd, change: 0 }]);
      setBudget(prevBudget => prevBudget - stockToAdd.price);
    }
  }

  function handleRemoveStock(stockToRemove) {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((stock) => stock.id !== stockToRemove.id)
    );
    setBudget(prevBudget => prevBudget + stockToRemove.price);
  }

  function handleSellStock(stockToSell) {
    const updatedPortfolio = portfolio.filter((stock) => stock.id !== stockToSell.id);
    setPortfolio(updatedPortfolio);
    setBudget(prevBudget => prevBudget + stockToSell.price);
  }

  function handleSortChange(sortOption) {
    setSortBy(sortOption);
  }

  function handleFilterChange(filterOption) {
    setFilterBy(filterOption);
  }

  function calculateTotalProfitLoss() {
    let totalProfitLoss = 0;
    portfolio.forEach((stock) => {
      const currentPrice = stock.price * (1 + Math.random() * 0.1 - 0.05); // Simulate fluctuation
      totalProfitLoss += currentPrice - stock.price;
    });
    return totalProfitLoss;
  }

  const totalProfitLoss = calculateTotalProfitLoss();
  const profitLossStatus = totalProfitLoss >= 0 ? "Profit" : "Loss";

  let sortedAndFilteredStocks = [...stocks];
  if (sortBy === "Alphabetically") {
    sortedAndFilteredStocks.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Price") {
    sortedAndFilteredStocks.sort((a, b) => a.price - b.price);
  }
  if (filterBy && filterBy !== "All") {
    sortedAndFilteredStocks = sortedAndFilteredStocks.filter(
      (stock) => stock.type === filterBy
    );
  }

  return (
    <>
      <Navbar />
      <FinHeader />
      <div className="finance-container">
        <SearchBar
          sortBy={sortBy}
          onChangeSort={handleSortChange}
          filterBy={filterBy}
          onChangeFilter={handleFilterChange}
        />
      <div className="row">
      <div>
        <TradingViewWidget/>
        </div>

        <div className="column details">
          
          <div className="col-4">
            <Portfolio
              stocks={portfolio}
              onRemoveStock={handleRemoveStock}
              onSellStock={handleSellStock}
            />
            <div className="trade-container"> 
            
              <p><span className="trade-bold">Total Profit/Loss:</span> ${totalProfitLoss.toFixed(2)}</p>
            <p className="trade-bold">You are on: {profitLossStatus}</p>
            <p><span className="trade-bold">Budget:</span> ${budget.toFixed(2)}</p>
            </div>
         
          </div>
          <br/>
          <div className="col-8">
            <StockContainer
              stocks={sortedAndFilteredStocks}
              onAddStock={handleAddStock}
              filterBy={filterBy}
            />
          </div>
        </div>
      </div>
      </div>
       <Footer />
<Chatbot/>
    </>
  );
}

export default MainContainer;



