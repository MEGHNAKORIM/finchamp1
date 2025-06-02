// WomenFinanceOpportunities.jsx
import React from 'react';
import Image from 'next/image';
import "@/styles/pages/home-working.css";
import woman from "@/public/assets/woman.png";
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import Chatbot from "@/app/ChatBot";

function Workinginfo() {
  return (

    <>
      <Navbar/>
    <div className="women-finance-opportunities">
      <div className='women-page'>
        <header className='women-header'>
            <div className='header-content'>
                <div className='header-left'>
                    <h1>Financial Opportunities for Women</h1>
                    <p>Explore financial opportunities tailored to women&apos;s needs, including scholarships, loans, financial aid, internships, and career development.</p>
                </div>
                <div className="header-right">
                    <Image src={woman} alt="Scholarship" width={100} height={100}/>
                </div>
            </div>
        </header>

      <section className="w-scholarships">
        <div className='div'>
        <h2>Scholarships and Grants</h2>
        <p>Discover scholarships and grants available for women:</p>
        <ul>
          <li>
            <h3>AAUW (American Association of University Women)</h3>
            <p>Offers scholarships and fellowships for women pursuing higher education. <a href="https://www.aauw.org/" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          <li>
            <h3>Jeannette Rankin Women’s Scholarship Fund</h3>
            <p>Provides scholarships and support for low-income women aged 35 and older. <a href="https://rankinfoundation.org/" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          {/* Add more scholarships specific to women */}
        </ul>
        </div>
      </section>

      <section className="w-loans">
        <div className='div'>
        <h2>Loans</h2>
        <p>Explore loans designed to support women&apos;s financial needs:</p>
        <ul>
          <li>
            <h3>Small Business Administration (SBA) Loans for Women-Owned Businesses</h3>
            <p>Offers loans with favorable terms and support for women entrepreneurs. <a href="https://www.sba.gov/funding-programs/loans/women-owned-business-loans" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          {/* Add more loan options */}
        </ul>
        </div>
      </section>

      <section className="w-financial-aid">
        <div className='div'>
        <h2>Financial Aid</h2>
        <p>Explore federal and institutional financial aid options for women:</p>
        <ul>
          <li>
            <h3>Women’s Educational Equity Act (WEEA)</h3>
            <p>Offers grants to support projects promoting gender equity in education. <a href="https://www2.ed.gov/about/offices/list/oese/women-equity/index.html" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          {/* Add more financial aid options */}
        </ul>
        </div>
      </section>

      <section className="w-internships">
        <div className='div'>
        <h2>Internships</h2>
        <p>Explore internship opportunities focused on empowering women:</p>
        <ul>
          <li>
            <h3>Women in Technology Internship Program</h3>
            <p>Provides internships for women pursuing careers in technology fields. <a href="https://www.womentech.net/" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          {/* Add more internship opportunities */}
        </ul>
        </div>
      </section>

      <section className="w-career-development">
        <div className='div'>
        <h2>Career Development</h2>
        <p>Discover resources for women&apos;s career advancement and professional growth:</p>
        <ul>
          <li>
            <h3>Lean In</h3>
            <p>Offers community support and resources for women pursuing leadership roles. <a href="https://leanin.org/" target="_blank" rel="noopener noreferrer" className='v-w'>Visit Website</a></p>
          </li>
          {/* Add more career development resources */}
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

export default Workinginfo;
