import React from "react";
import "../../styles/pages/fin.css"

function Stock({ stock, onAddStock, onStockClick }) {
  // Simulate a random fluctuation in stock prices
  const currentPrice = stock.price * (1 + Math.random() * 0.1 - 0.05); // Randomly fluctuate by up to 5%

  // Calculate profit or loss
  const change = currentPrice - stock.price;
  const profitLossClass = change >= 0 ? "profit" : "loss";

  return (
    <div className={`fin-card ${profitLossClass}`} onClick={onStockClick ? () => onStockClick(stock) : null}>
      <div className="fin-card-body">
        <div className="stock">
        <h5 className="fin-card-title">{stock.name}</h5>
        <p className="fin-card-text">C/Price: ${currentPrice.toFixed(2)}</p>
        <p className="fin-card-text">P/Price: ${stock.price}</p>
        <p className="fin-card-text">Change: ${change.toFixed(2)}</p>
        </div>
        {onAddStock && <button onClick={() => onAddStock(stock)} className="trade-btn">Add to Portfolio</button>}
      </div>
    </div>
  );
}

export default Stock;
