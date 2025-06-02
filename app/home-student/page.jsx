import React from 'react';
import Navbar from './Navbar';
import Footer from '../../components/Footer';
import LearnMoreCard from '../../components/home/learnmore';
import FinanceTopics from '../../components/home/finance-topics';
import Headlines from "../../components/home/headlines"
import "../../styles/pages/home-student/homes.css";
import PhotoCards from '../../components/Photocards';
import StockPriceChecker from '../../components/home/stockprice';
import Chatbot from "@/app/ChatBot";

const HomeStudent = () => {
  const studentOpportunitiesUrl = 'home-student/students-opportunities';

  return (
    <>
      <Navbar />
          <div className='first-container'>  
            <StockPriceChecker />   
            <div className="home-cards-container">
              <div className="home-cards">
                <FinanceTopics />
              </div>
            </div>
          </div>   

          <div className="student-loan">
            <LearnMoreCard
              title="Student Opportunities"
              description="Explore various opportunities available for students."
              url={studentOpportunitiesUrl}
            />
          </div>
            
          <div className='latest-heading'>
            <Headlines />
          </div>
          <div className='latest-articles'>
            <h1>Latest Articles</h1>
            <PhotoCards />
          </div>
      <Footer />
      <Chatbot />
       
    </>
  );
};

export default HomeStudent;
