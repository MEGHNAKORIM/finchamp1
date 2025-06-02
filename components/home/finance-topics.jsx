import React from 'react';
import FinanceCards from "./finance-cards";
import "../../styles/components/home/finance-topics.css";

import stock from "../../public/assets/stock.png";
import comparsion from "../../public/assets/finance-topics/comparison.png";
import loan from "../../public/assets/finance-topics/loan.png";
import retirement from "../../public/assets/finance-topics/pension.png";
import investment from "../../public/assets/finance-topics/portfolio.png";
import insurance from "../../public/assets/insurance.png";
import personal from "../../public/assets/finance-topics/personal.png";
import bank from "../../public/assets/finance-topics/transaction.png";

const Topics = [
  {
    topic: "Stocks",
    imageUrl: stock,
    url: "/stocks",
  },
  {
    topic: "Loans",
    imageUrl: loan,
    url: "/loans",
  },
  {
    topic: "Investment",
    imageUrl: investment,
    url: "/investment",
  },
  {
    topic: "Insurance",
    imageUrl: insurance,
    url: "/insurance",
  },
  {
    topic: "Bank",
    imageUrl: bank,
    url: "/bank",
  },
  {
    topic: "Finance",
    imageUrl: personal,
    url: "/finance",
  },
  {
    topic: "Retirement",
    imageUrl: retirement,
    url: "/retirement",
  },
  {
    topic: "Comparsions",
    imageUrl: comparsion,
    url: "/comparisons",
  },
];

const FinanceTopics = () => {
  return (
    <div className="finance-topics">
      {Topics.map((topic, index) => (
        <FinanceCards key={index} {...topic} />
      ))}
    </div>
  );
};

export default FinanceTopics;
