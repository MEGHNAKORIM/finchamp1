import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import business from "@/public/assets/handshake.png"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/app/ChatBot";
import "@/styles/pages/home/comparsions/business.css"

const Business = () => {
  // Example business loan data
  const businessLoans = [
    {
      name: "Chase Business Complete Banking℠",
      provider: "Grandeur Bank",
      details: "Get $300 as a new Chase business checking customer when you open a Chase Business Complete Banking℠ account, deposit $2,000 within 30 business days of coupon enrollment, maintain that balance for 60 days, and complete 5 qualifying transactions within 90 days.",
      perks: "No minimum deposit to open, 100 transactions per month without a fee, QuickAccept, 24/7 customer service, access to Chase’s business resources.",
      website: "https://www.grandeurbank.com"
    },
    {
      name: "Fundera Business Loans",
      provider: "Horizon Capital",
      details: "Fundera offers a marketplace where you can compare loan options from multiple lenders. Loans can be used for various business purposes such as expansion, equipment purchase, or working capital.",
      perks: "Access to multiple loan options, personalized loan matching, support from loan specialists, transparent rates and terms.",
      website: "https://www.horizoncapital.com"
    },
    {
      name: "First Trust Small Business Loans",
      provider: "Unity Finance",
      details: "First Trust offers small business loans tailored to your needs, whether you're looking to expand, purchase equipment, or cover day-to-day expenses.",
      perks: "Flexible loan terms, competitive interest rates, dedicated support for small businesses, quick approval process.",
      website: "https://www.unityfinance.com"
    },
    {
      name: "Summit Alliance Business Line of Credit",
      provider: "Summit Alliance",
      details: "Access a revolving line of credit for your business needs with Summit Alliance. Draw funds as needed and pay interest only on what you use.",
      perks: "Flexible borrowing options, competitive interest rates, online account management, fast funding.",
      website: "https://www.summitalliance.com"
    },
    {
      name: "Pinnacle Corporate Loans",
      provider: "Pinnacle Finance",
      details: "Pinnacle Finance provides corporate loans to help businesses expand operations, purchase new equipment, or manage cash flow.",
      perks: "High loan amounts, competitive interest rates, tailored repayment schedules, expert financial advice.",
      website: "https://www.pinnaclefinance.com"
    },
  ];

  return (
    <>
      <Navbar />
      <div className='business-loan-container'>
        <h1>Best Business Loans of the Month</h1>
        <Image src={business} className='business-img' alt="Handshake" width={100} height={100} />
        {businessLoans.map((loan, index) => (
          <div key={index} className='business-loan-card'>
            <h2>{loan.name}</h2>
            <p><span className='bus-1'>Provider:</span> {loan.provider}</p>
            <p><span className='bus-1'>Details:</span> {loan.details}</p>
            <p><span className='bus-1'>Perks:</span> {loan.perks}</p>
            <a href={loan.website} target="_blank" rel="noopener noreferrer" className='visit-website-button-bus'>Visit Website</a>
          </div>
        ))}
      </div>
       <Footer />
<Chatbot/>
    </>
 
  );
};

export default Business;
