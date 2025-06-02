import React from 'react';
import Image from 'next/image';
import car from "@/public/assets/car.png"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/pages/home/comparsions/car-insurance.css";
import Chatbot from "@/app/ChatBot";


const CarInsurance = () => {
  // Example car insurance data
  const carInsurances = [
    {
      name: "RoadSecure Auto Insurance",
      provider: "Pioneer Insurance",
      details: "Comprehensive coverage with roadside assistance and rental car reimbursement. Rates starting at $49/month.",
      perks: "24/7 customer service, customizable coverage options, accident forgiveness, multi-policy discounts.",
      website: "https://www.pioneerinsurance.com"
    },
    {
      name: "DriveGuard Car Insurance",
      provider: "Guardian Assurance",
      details: "Affordable coverage with excellent customer support and claims service. Rates starting at $39/month.",
      perks: "No deductible on glass repairs, lifetime repair guarantee, new car replacement, accident forgiveness.",
      website: "https://www.guardianassurance.com"
    },
    {
      name: "SafeJourney Auto Protection",
      provider: "Trailblazer Insurance",
      details: "Premium coverage with added benefits like gap insurance and new car replacement. Rates starting at $59/month.",
      perks: "Gap insurance, new car replacement, diminishing deductible, accident forgiveness.",
      website: "https://www.trailblazerinsurance.com"
    },
    {
      name: "SecureRide Vehicle Insurance",
      provider: "Titan Insure",
      details: "Competitive rates with customizable coverage options and excellent customer service. Rates starting at $45/month.",
      perks: "24/7 roadside assistance, rental car coverage, accident forgiveness, multi-car discount.",
      website: "https://www.titaninsure.com"
    },
    {
      name: "PeakPerformance Auto Cover",
      provider: "Summit Peak Insurance",
      details: "Reliable coverage with a focus on customer satisfaction and claims service. Rates starting at $55/month.",
      perks: "Accident forgiveness, vanishing deductible, lifetime repair guarantee, 24/7 claims service.",
      website: "https://www.summitpeakinsurance.com"
    },
  ];

  return (
    <>
      <Navbar />
      <div className='car-insurance-container'>
        <h1>Top Car Insurance Plans of the Month</h1>
        <Image src={car} className='bold-img' width={95} height={95} alt="Car" />
        <div className='car-insurance-grid'>
          {carInsurances.map((insurance, index) => (
            <div key={index} className='car-insurance-card'>
              <h2>{insurance.name}</h2>
              <p><span className='bold'>Provider:</span> {insurance.provider}</p>
              <p><span className='bold'>Details:</span> {insurance.details}</p>
              <p><span className='bold'>Perks:</span> {insurance.perks}</p>
              <a href={insurance.website} target="_blank" rel="noopener noreferrer" className='visit-website-button'>Visit Website</a>
            </div>
          ))}
        </div>
      </div>
       <Footer />
<Chatbot/>
       
    </>

  );
};

export default CarInsurance;
