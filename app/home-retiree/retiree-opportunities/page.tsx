// RetirementPage.jsx
import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import "@/styles/pages/home-retiree.css"
import retire from "@/public/assets/retirement1.png";
import Chatbot from "@/app/ChatBot";



function Retireeinfo() {
  return (
    <>
    <Navbar/>
    <div className="retirement-page">
      <div className='retiree'>
        <header className="retirement-header">
            <div className='header-content'>
                <div className='header-left'>
                    <h1>Securing Your Retirement</h1>
                    <p>Discover a range of retirement opportunities crafted to help you plan for a secure future. From retirement savings plans with competitive returns to expert financial advice, we offer the resources you need to ensure a comfortable and worry-free retirement.</p>
                </div>
                <div className="header-right">
                    <Image src={retire} width={100} height={100} alt={''}/>
                </div>
            </div>
        </header>

      <section className="light-purple-section">
        <div className='div'>
        <div className='div'>
        <h2>Retirement Savings Plans</h2>
        <p>Explore retirement savings plans tailored to your needs:</p>
        </div>
        <ul>
          <li>
            <h3>401(k)</h3>
            <p>Employer-sponsored retirement plan that allows employees to save and invest a portion of their paycheck before taxes. <a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          <li>
            <h3>IRA (Individual Retirement Account)</h3>
            <p>Personal retirement account that offers tax advantages for individuals to save for retirement. <a href="https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
        </ul>
        </div>
      </section>

      <section className="dark-purple-section">
        <div className='div'>
        <div className='div'>
        <h2>Expert Financial Advice</h2>
        <p>Get expert advice on retirement planning:</p>
        </div>
        <ul>
          <li>
            <h3>Financial Advisor Consultation</h3>
            <p>Meet with a certified financial planner to create a personalized retirement strategy. <a href="#" className='v-w'>Learn More</a></p>
          </li>
          <li>
            <h3>Retirement Planning Workshops</h3>
            <p>Attend workshops and seminars to learn about retirement planning best practices. <a href="#" className='v-w'>Learn More</a></p>
          </li>
        </ul>
        </div>
      </section>

      </div>
    </div>
        <Footer/>
         <Chatbot/>
    </>

  );
}

export default Retireeinfo;
