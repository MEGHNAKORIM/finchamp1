import React from 'react';
import Navbar from './Navbar';
import Footer from '../../components/Footer';
import LearnMoreCard from '../../components/home/learnmore';
import FinanceTopics from '../../components/home/finance-topics';
import Headlines from "../../components/home/headlines"
import "../../styles/pages/home-student/homes.css";
import PhotoCards from '../../components/Photocards';
import Chatbot from "@/app/ChatBot";


import StockPriceChecker from '../../components/home/stockprice';

const HomeWorking = () => {
  const workingOpportunitiesUrl = 'home-working/women-opportunities';

  return (
    <div>
      <Navbar />
      <div className='first-container'>  
            <StockPriceChecker />   
            <div className="home-cards-container">
              <div className="home-cards">
                <FinanceTopics />
              </div>
            </div>
          </div> 
    
      <div className="student-loan"> {/* Use directly from CSS */}
        <LearnMoreCard
          title="Opportunities for Women"
          description="Explore various opportunities available for Women."
          url={workingOpportunitiesUrl}
        />
      </div>
      <div className='latest-heading'>
      <Headlines/>
      </div>
      <div className='latest-articles'>
      <h1>Latest Articles</h1>
        <PhotoCards/>
      </div>
      
       <Footer />
<Chatbot/>
    </div>
  );
};

export default HomeWorking;
