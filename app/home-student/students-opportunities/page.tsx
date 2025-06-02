import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import scholarship from "@/public/assets/scholarship.png";
import "@/styles/pages/home-student/studentsopportunities.css";
import Chatbot from "@/app/ChatBot";

function Studentinfo() {
  return (
    <>
      <Navbar />
      <div className="student-content-container">
        <div className="student-financing-page">
          <header className="student-header">
            <div className="header-content">
              <div className="header-left">
                <h1>Financial Opportunities for Students</h1>
                <p>Explore a range of financial opportunities tailored to students&apos; needs, including scholarships, grants, financial aid, internships, and freelance work.</p>
              </div>
              <div className="header-right">
                <Image src={scholarship} alt="Scholarship" width={100} height={100} />
              </div>
            </div>
          </header>

          <section className="scholarships">
            <div className='div'>
            <h2>Scholarships and Grants</h2>
            <p>Discover scholarships and grants available for students:</p>
            </div>
            <ul>
              <li>
                <h3>Scholarships.com</h3>
                <p>Find scholarships based on academic achievements, extracurricular activities, and personal backgrounds. <a href="https://www.scholarships.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>Fastweb</h3>
                <p>Search for scholarships, internships, and part-time jobs. Get matched to scholarships based on your profile. <a href="https://www.fastweb.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>College Board</h3>
                <p>Explore scholarship programs offered by colleges and universities. Get information about merit-based and need-based scholarships. <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>The Gates Scholarship</h3>
                <p>Provides full cost of attendance scholarships to Pell-eligible, minority, high school seniors. <a href="https://www.thegatesscholarship.org/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>National Merit Scholarship</h3>
                <p>Recognizes and awards scholarships to high-achieving students based on PSAT/NMSQT scores. <a href="https://www.nationalmerit.org/s/1758/interior.aspx?sid=1758&gid=2&pgid=424" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
            </ul>
          </section>

          <section className="financial-aid">
            <div className='div'>
            <h2>Financial Aid</h2>
            <p>Explore federal and institutional financial aid options:</p>
            </div>
            <ul>
              <li>
                <h3>FAFSA (Free Application for Federal Student Aid)</h3>
                <p>Complete the FAFSA form to apply for federal financial aid, including grants, loans, and work-study programs. <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>College Board</h3>
                <p>Search for financial aid opportunities and scholarship programs offered by colleges and universities. <a href="https://bigfuture.collegeboard.org/pay-for-college/financial-aid" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>Institutional Aid</h3>
                <p>Check with your college or university for institutional aid options, including grants, scholarships, and tuition assistance programs.</p>
              </li>
            </ul>
          </section>

          <section className="internships">
            <div className='div'>
            <h2>Internships</h2>
            <p>Gain valuable work experience through internships:</p>
            </div>
            <ul>
              <li>
                <h3>Internships.com</h3>
                <p>Search for internships in various industries and locations. Create a profile to receive personalized internship recommendations. <a href="https://www.internships.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>LinkedIn</h3>
                <p>Explore internship opportunities posted by companies on LinkedIn&apos;s job board. <a href="https://www.linkedin.com/jobs/internship-jobs/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>Indeed</h3>
                <p>Search for internships and entry-level jobs. Filter by location, salary, and company. <a href="https://www.indeed.com/q-Internship-jobs.html" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
            </ul>
          </section>

          <section className="freelance">
            <div className='div'>
            <h2>Freelance Work</h2>
            <p>Explore freelance opportunities to earn income while studying:</p>
            </div>
            <ul>
              <li>
                <h3>Upwork</h3>
                <p>Find freelance jobs in various fields, including writing, design, programming, and marketing. <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>Fiverr</h3>
                <p>Offer your skills and services to clients worldwide on Fiverr&apos;s freelance platform. <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
              <li>
                <h3>Toptal</h3>
                <p>Join Toptal&apos;s network of top freelancers and work on high-quality projects with leading companies. <a href="https://www.toptal.com/" target="_blank" rel="noopener noreferrer">Visit Website</a></p>
              </li>
            </ul>
          </section>

        </div>
      </div>
       <Footer />
<Chatbot/>
       
    </>
  );
}

export default Studentinfo;
