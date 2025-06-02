import React from "react";
import Stock from "./Stock";
import "../../styles/pages/fin.css"

function StockContainer({ stocks, onAddStock }) {
  const stockList = stocks.map(stock => (
    <Stock key={stock.id} stock={stock} onAddStock={onAddStock} />
  ));

  return (
    <div className="stock-container"> 
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
