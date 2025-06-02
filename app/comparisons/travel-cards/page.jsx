import React from 'react';
import Image from 'next/image';
import Chatbot from "@/app/ChatBot";
import plane from "@/public/assets/plane.png"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/pages/home/comparsions/travel-cards.css";


const TravelCards = () => {
  // Example travel card data
  const travelCards = [
    {
      name: "Grandeur Travel Rewards",
      provider: "Grandeur Bank",
      details: "Earn 3x points on travel and dining, and 1x points on all other purchases. No foreign transaction fees.",
      perks: "Travel accident insurance, trip cancellation coverage, 24/7 concierge service, access to airport lounges.",
      website: "https://www.grandeurbank.com" // Website URL of the card provider
    },
    {
      name: "Prosperity Global Explorer",
      provider: "Prosperity Trust",
      details: "Earn 2x miles on all purchases. 60,000 bonus miles after spending $3,000 in the first 3 months.",
      perks: "Free checked bag, priority boarding, travel and purchase protection, complimentary hotel upgrades.",
      website: "https://www.prosperitytrust.com"
    },
    {
      name: "Horizon Elite Travel",
      provider: "Horizon Capital",
      details: "Earn 5x points on airfare, 2x points on hotels and restaurants, 1x points on all other purchases.",
      perks: "Access to over 1,000 airport lounges, travel insurance, rental car insurance, 24/7 travel assistance.",
      website: "https://www.horizoncapital.com"
    },
    {
      name: "Unity TravelPlus",
      provider: "Unity Finance",
      details: "Earn 4x points on travel and dining. 50,000 bonus points after spending $4,000 in the first 3 months.",
      perks: "No foreign transaction fees, trip delay reimbursement, lost luggage reimbursement, emergency assistance.",
      website: "https://www.unityfinance.com"
    },
    {
      name: "Summit Alliance Travel Rewards",
      provider: "Summit Alliance",
      details: "Earn 3x miles on travel, 2x miles on dining, and 1x miles on all other purchases.",
      perks: "Annual travel credit, TSA PreCheck/Global Entry fee credit, travel accident insurance, 24/7 concierge service.",
      website: "https://www.summitalliance.com"
    },
  ];

  return (
    <>
<Navbar />
      <div className='travel-card-container'>
        <h1>Best Travel Cards of the Month</h1>
        <Image src={plane} className='bold-img tc' alt="Travel" width={95} height={95} />
        <div className='travel-card-grid'>
          {travelCards.map((card, index) => (
            <div key={index} className='travel-card-card'>
              <h2>{card.name}</h2>
              <p><span className='bold'>Provider: </span>{card.provider}</p>
              <p><span className='bold'>Details:</span> {card.details}</p>
              <p><span className='bold'>Perks:</span> {card.perks}</p>
              <a href={card.website} target="_blank" rel="noopener noreferrer" className="visit-website-button">Visit Website</a>
            </div>
          ))}
        </div>
      </div>
       <Footer />
<Chatbot/>
       
    </>

  );
};

export default TravelCards;
