import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/components/home/card-best/comparsion.css";

import creditsImage from '../../public/assets/creditsImage.png';
import savingsImage from '../../public/assets/savingImage.png';
import travelImage from '../../public/assets/travelImage.png';
import businessImage from '../../public/assets/businessImage.png';
import personalImage from '../../public/assets/pImage.png';
import carImage from '../../public/assets/carImage.png';
import brokerImage from '../../public/assets/brokerImage.png';
import mortgageImage from '../../public/assets/mortgageImage.png';
import Chatbot from "@/app/ChatBot";

const ComparisionsCards = () => {
  return (
    <>
      <Navbar />
      <div className="compare-cards-container">
        <div className='header'>
        <h1>Discover the Best Financial Products for You</h1>
        <p className="compare-subheading">
          Compare and find the right financial products to meet your needs. From credit cards to savings accounts, travel cards, and more, we&apos;ve got you covered.
        </p>
        </div>
        
        <div className="compare-cards">
          <div className='card'>
          <Link href="/comparisons/credit-cards" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={creditsImage} alt="Credits" className="compare-card-image" />
              <span>Credit Cards</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/savings-account" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={savingsImage} alt="Savings Account" className="compare-card-image" />
              <span>Savings Account</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/travel-cards" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={travelImage} alt="Travel Cards" className="compare-card-image" />
              <span>Travel Cards</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/business-loans" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={businessImage} alt="Business Loans" className="compare-card-image" />
              <span>Business Loans</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/personal-loans" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={personalImage} alt="Personal Loans" className="compare-card-image" />
              <span>Personal Loans</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/car-insurance" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={carImage} alt="Car Insurance" className="compare-card-image" />
              <span>Car Insurance</span>
            </div>
          </Link>
          </div>

          <div className='card'>
          <Link href="/comparisons/mortgage" passHref legacyBehavior>
            <div className="compare-card-button">
              <Image src={mortgageImage} alt="Mortgage" className="compare-card-image" />
              <span>Mortgage</span>
            </div>
          </Link>
          </div>
        </div>
      </div>
       <Footer />
<Chatbot/>
    </>
  );
};

export default ComparisionsCards;
