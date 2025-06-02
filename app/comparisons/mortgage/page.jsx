import React from 'react';
import Image from 'next/image';
import money from "@/public/assets/mortgage.png"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/pages/home/comparsions/mortgage.css";
import Chatbot from "@/app/ChatBot";

const Mortgage = () => {
  // Example mortgage data
  const mortgages = [
    {
      name: "Vista Home Mortgage",
      provider: "Vista Bank",
      details: "Low interest rates starting at 2.99% APR. Borrow up to $500,000 with flexible terms up to 30 years.",
      perks: "No origination fees, quick approval process, flexible repayment options, rate lock feature.",
      website: "https://www.vistabank.com"
    },
    {
      name: "PrimeLender Mortgage",
      provider: "PrimeLender",
      details: "Competitive rates starting at 3.25% APR. Finance your dream home with loans up to $600,000.",
      perks: "No prepayment penalties, easy online application, rate lock, various loan options.",
      website: "https://www.primelender.com"
    },
    {
      name: "HomeSafe Mortgage",
      provider: "SafeHome Finance",
      details: "Affordable rates starting at 3.15% APR. Get financing up to $450,000 with customizable terms.",
      perks: "Low closing costs, quick processing, flexible down payment options, fixed and variable rates.",
      website: "https://www.safehomefinance.com"
    },
    {
      name: "BlueSky Mortgage",
      provider: "BlueSky Lending",
      details: "Low rates starting at 2.85% APR. Borrow up to $550,000 with personalized mortgage solutions.",
      perks: "Rate lock, fast approval, flexible repayment plans, no hidden fees.",
      website: "https://www.blueskylending.com"
    },
    {
      name: "SummitPeak Home Loan",
      provider: "SummitPeak Financial",
      details: "Rates starting at 3.10% APR. Finance up to $700,000 with various term options.",
      perks: "Competitive rates, easy application process, rate lock, multiple loan programs.",
      website: "https://www.summitpeakfinancial.com"
    },
  ];

  return (
    <>
      <Navbar/>
      <div className='mortgage-container'>
        <h1>Top Mortgage Plans of the Month</h1>
        <Image src={money} className='money-image' width={85} height={85}/>
        {mortgages.map((mortgage, index) => (
          <div key={index} className='mortgage-card'>
            <h2>{mortgage.name}</h2>
            <p><span className='mort-1'>Provider:</span> {mortgage.provider}</p>
            <p><span className='mort-1'>Details:</span> {mortgage.details}</p>
            <p><span className='mort-1'>Perks:</span> {mortgage.perks}</p>
            <a href={mortgage.website} target="_blank" rel="noopener noreferrer" className='visit-website-button-mort'>Visit Website</a>
          </div>
        ))}
      </div>
      <Footer/>
      <Chatbot/>
    </>

  );
};

export default Mortgage;
