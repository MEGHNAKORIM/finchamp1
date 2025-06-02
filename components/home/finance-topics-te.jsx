import React from 'react';
import FinanceCardsTe from "./finance-cards-te";
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
    topic: "స్టాక్స్",
    imageUrl: stock,
    url: "/stocks",
  },
  {
    topic: "రుణాలు",
    imageUrl: loan,
    url: "/loans",
  },
  {
    topic: "పెట్టుబడి",
    imageUrl: investment,
    url: "/investment",
  },
  {
    topic: "భీమా",
    imageUrl: insurance,
    url: "/insurance",
  },
  {
    topic: "బ్యాంక్",
    imageUrl: bank,
    url: "/bank",
  },
  {
    topic: "ఫైనాన్స్",
    imageUrl: personal,
    url: "/finance",
  },
  {
    topic: "పదవీ విరమణ",
    imageUrl: retirement,
    url: "/retirement",
  },
  {
    topic: "పోలికలు",
    imageUrl: comparsion,
    url: "/comparisons",
  },
];

const FinanceTopicsTe = () => {
  return (
    <div className="finance-topics">
      {Topics.map((topic, index) => (
        <FinanceCardsTe key={index} {...topic} />
      ))}
    </div>
  );
};

export default FinanceTopicsTe;
