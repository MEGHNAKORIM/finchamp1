import React from "react";
import Stock from "./Stock";
import "../../styles/pages/fin.css"

function Portfolio({ stocks, onRemoveStock, onSellStock }) {
  return (
    <div>
      <h2 className="text">My Portfolio</h2>
      {stocks.map((stock) => (
        <div key={stock.id} className={`portfolio-item ${stock.change >= 0 ? "profit" : "loss"}`}>
          <Stock stock={stock} />
          <button onClick={() => onSellStock(stock)} className="trade-btn">Sell</button>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
