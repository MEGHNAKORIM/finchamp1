import React from 'react';
import Image from 'next/image';
import personal from "@/public/assets/pImage.png"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/pages/home/comparsions/savings-accounts.css";
import Chatbot from "@/app/ChatBot";

const SavingsAccount = () => {
  // Example savings account data
  const savingsAccounts = [
    {
      name: "Grandeur High Yield Savings",
      provider: "Grandeur Bank",
      details: "Earn up to 2.00% APY on your savings with no minimum balance required. Enjoy easy online access and mobile banking.",
      perks: "No monthly fees, 24/7 customer support, mobile check deposit, automatic savings plans.",
      website: "https://www.grandeurbank.com"
    },
    {
      name: "Prosperity Premium Savings",
      provider: "Prosperity Trust",
      details: "Get up to 1.75% APY on balances over $10,000. Access your funds anytime with no withdrawal limits.",
      perks: "Free online transfers, no maintenance fees, high interest rates, overdraft protection.",
      website: "https://www.prosperitytrust.com"
    },
    {
      name: "Horizon Smart Savings",
      provider: "Horizon Capital",
      details: "Earn up to 1.50% APY with no minimum deposit. Manage your account effortlessly with our intuitive mobile app.",
      perks: "No monthly service fees, mobile alerts, free ATM access, financial planning tools.",
      website: "https://www.horizoncapital.com"
    },
    {
      name: "Unity Secure Savings",
      provider: "Unity Finance",
      details: "Enjoy a 1.25% APY with a minimum balance of $500. Get peace of mind with our FDIC-insured accounts.",
      perks: "FDIC insured, free online banking, 24/7 customer service, automatic transfers.",
      website: "https://www.unityfinance.com"
    },
    {
      name: "Summit Alliance Savings Plus",
      provider: "Summit Alliance",
      details: "Earn 1.80% APY on your savings with no monthly fees. Benefit from our competitive interest rates and easy access.",
      perks: "Competitive interest rates, no monthly maintenance fees, online and mobile banking, free financial advice.",
      website: "https://www.summitalliance.com"
    },
  ];

  return (
    <>
      <Navbar />
      <div className='savings-account-container'>
        <h1>Top Savings Accounts of the Month</h1>
        <Image src={personal} className='save-img' width={100} height={100} alt="Savings Account" />
        <div className='savings-accounts-grid'>
          {savingsAccounts.map((account, index) => (
            <div key={index} className='savings-account-card'>
              <h2>{account.name}</h2>
              <p><span className='save'>Provider:</span> {account.provider}</p>
              <p><span className='save'>Details:</span> {account.details}</p>
              <p><span className='save'>Perks:</span> {account.perks}</p>
              <a href={account.website} target="_blank" rel="noopener noreferrer" className="visit-website-button-save">Visit Website</a>
            </div>
          ))}
        </div>
      </div>
       <Footer />
<Chatbot/>
    </>
  
  );
};

export default SavingsAccount;
