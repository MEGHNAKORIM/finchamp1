import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Chatbot from "@/app/ChatBot";
import personal from "@/public/assets/pImage.png"
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "@/styles/pages/home/comparsions/personal-loans.css"

const Personal = () => {
 
  const personalLoans = [
    {
      name: "Vista Personal Loan",
      provider: "Vista Bank",
      details: "Get a personal loan with rates as low as 4.99% APR. Borrow up to $50,000 with flexible terms up to 60 months.",
      perks: "No origination fees, fixed rates, quick approval process, no prepayment penalties.",
      website: "https://www.vistabank.com"
    },
    {
      name: "SilverLine Quick Loan",
      provider: "SilverLine Trust",
      details: "Secure a personal loan up to $40,000 with rates starting at 5.25% APR. Enjoy fast funding and flexible repayment options.",
      perks: "No collateral required, competitive interest rates, easy online application, flexible terms.",
      website: "https://www.silverlinetrust.com"
    },
    {
      name: "BrightPath Flex Loan",
      provider: "BrightPath Capital",
      details: "Borrow up to $35,000 with rates as low as 5.99% APR. Customize your loan with terms ranging from 12 to 48 months.",
      perks: "Fixed monthly payments, quick online approval, no hidden fees, personalized loan options.",
      website: "https://www.brightpathcapital.com"
    },
    {
      name: "Nova Personal Credit",
      provider: "Nova Finance",
      details: "Get a personal loan with rates starting at 6.49% APR. Borrow up to $30,000 with terms up to 72 months.",
      perks: "No origination fees, flexible repayment plans, fast approval, no prepayment penalties.",
      website: "https://www.novafinance.com"
    },
    {
      name: "Summit Ridge Personal Loan",
      provider: "Summit Ridge",
      details: "Access personal loans up to $25,000 with rates as low as 6.99% APR. Benefit from quick funding and no hidden fees.",
      perks: "Simple online application, competitive rates, flexible terms, quick funding.",
      website: "https://www.summitridge.com"
    },
  ];

  return (
    <>
      <Navbar/>
      <div className='personal-loan-container'>
        <h1>Top Personal Loans of the Month</h1>
        <Image src={personal} className='bold-img' width={100} height={100}/>
        {personalLoans.map((loan, index) => (
          <div key={index} className='personal-loan-card'>
            <h2>{loan.name}</h2>
            <p><span className='bold'>Provider: </span>{loan.provider}</p>
            <p><span className='bold'>Details: </span>{loan.details}</p>
            <p><span className='bold'>Perks:</span> {loan.perks}</p>
            <a href={loan.website} target="_blank" rel="noopener noreferrer" className="visit-website-button">Visit Website</a>
          </div>
        ))}
      </div>
      <Footer/>
       <Chatbot/>
    </>

  );
};

export default Personal;
