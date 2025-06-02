import React from 'react';
import Image from 'next/image';
import credit from "../credit-card.png";
import creditc from "../credit.jpg";
import Link from 'next/link';
import "../CreditCards.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/app/ChatBot";

const CashBack = () => {
  // Example credit card data
  const creditCards = [
 
  
    {
      name: "Capital One Venture Rewards",
      issuer: "Capital One",
      rewards: "Earn unlimited 2X miles on every purchase",
      annualFee: "$95",
      image: creditc,
      website: "https://www.capitalone.com"
    },
    {
      name: "Discover it Cash Back",
      issuer: "Discover",
      rewards: "5% cash back on rotating quarterly categories",
      annualFee: "$0",
      image: creditc,
      website: "https://www.discover.com"
    },
    // Add more credit card objects as needed
  ];

  return (
    <>
      <Navbar/>
   <div className='cc-card-container'>
   <div className='header'>
          <div className='header-content'>
            <div className='header-left'>
              <h1>Best Credit Cards of the Month</h1>
            </div>
            
          </div>
        </div>
      <div className="button-container">
        <Link href="/comparisons/credit-cards/travel" legacyBehavior>
          <a className="filter-button">Travel</a>
        </Link>
        <Link href="/comparisons/credit-cards/low-investment" legacyBehavior>
          <a className="filter-button">Low-Investment</a>
        </Link>
        <Link href="/comparisons/credit-cards/best-offer" legacyBehavior>
          <a className="filter-button">Best Offer</a>
        </Link>
        <Link href="/comparisons/credit-cards/cash-back" legacyBehavior>
          <a className="filter-button">Cash Back</a>
        </Link>
      </div>
      <h2 className='cc-heading'>Cash-Back Offers</h2>
      {creditCards.map((card, index) => (
        <div key={index} className='credit-card'>
          <Image src={card.image} alt={card.name} className="card-image" width={100} height={100} />
        
          <div className="card-info">
            <h2>{card.name}</h2>
            <p><span className='bold'>Issuer: </span>{card.issuer}</p>
            <p><span className='bold'>Rewards:</span> {card.rewards}</p>
            <p><span className='bold'>Annual Fee:</span> {card.annualFee}</p>
            <a href={card.website} target="_blank" rel="noopener noreferrer" className="visit-website-button cc">Visit Website</a>
          </div>
        </div>
      ))}
    </div>
      <Footer/>
       <Chatbot/>
    </>
 
  );
};

export default CashBack;
