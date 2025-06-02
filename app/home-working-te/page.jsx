import React from 'react';
import Navbar from './Navbar';
import Footer from '../../components/Footer';
import LearnMoreCardTe from '../../components/home/learnmore-te';
import FinanceTopicsTe from '../../components/home/finance-topics-te';
import HeadlinesTe from "../../components/home/headlines-te"
import "../../styles/pages/home-student/homes.css";
import PhotoCardsTe from '../../components/Photocards-te';
import Chatbot from "@/app/ChatBot";


import StockPriceCheckerTe from '../../components/home/stockprice-te';

const HomeWorking = () => {
  const workingOpportunitiesUrl = 'home-working-te/women-opportunities-te';

  return (
    <div>
      <Navbar />
      <div className='first-container'>  
            <StockPriceCheckerTe />   
            <div className="home-cards-container">
              <div className="home-cards">
                <FinanceTopicsTe />
              </div>
            </div>
          </div> 
    
      <div className="student-loan"> {/* Use directly from CSS */}
        <LearnMoreCardTe
          title="మహిళలకు అవకాశాలు"
          description="మహిళలకు అందుబాటులో ఉన్న వివిధ అవకాశాలను అన్వేషించండి."
          url={workingOpportunitiesUrl}
        />
      </div>
      <div className='latest-heading'>
      <HeadlinesTe/>
      </div>
      <div className='latest-articles'>
      <h1>తాజా కథనాలు</h1>
        <PhotoCardsTe/>
      </div>
      
       <Footer />
<Chatbot/>
    </div>
  );
};

export default HomeWorking;
