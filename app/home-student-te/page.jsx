import React from 'react';
import Navbar from './Navbar';
import Footer from '../../components/Footer';
import LearnMoreCardTe from '../../components/home/learnmore-te';
import FinanceTopicsTe from '../../components/home/finance-topics-te';
import HeadlinesTe from "../../components/home/headlines-te"
import "../../styles/pages/home-student/homes.css";
import PhotoCardsTe from '../../components/Photocards-te';
import StockPriceCheckerTe from '../../components/home/stockprice-te';
import Chatbot from "@/app/ChatBot";

const HomeStudent = () => {
  const studentOpportunitiesUrl = 'home-student-te/students-opportunities-te';

  return (
    <>
      <Navbar />
          <div className='first-container'>  
            <StockPriceCheckerTe />   
            <div className="home-cards-container">
              <div className="home-cards">
                <FinanceTopicsTe />
              </div>
            </div>
          </div>   

          <div className="student-loan">
            <LearnMoreCardTe
              title="విద్యార్థి అవకాశాలు"
              description="విద్యార్థులకు అందుబాటులో ఉన్న వివిధ అవకాశాలను అన్వేషించండి."
              url={studentOpportunitiesUrl}
            />
          </div>
            
          <div className='latest-heading'>
            <HeadlinesTe/>
          </div>
          <div className='latest-articles'>
            <h1>తాజా కథనాలు</h1>
            <PhotoCardsTe />
          </div>
      <Footer />
      <Chatbot />
       
    </>
  );
};

export default HomeStudent;
