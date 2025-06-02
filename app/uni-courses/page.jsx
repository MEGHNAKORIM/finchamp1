import React from 'react';
import  '@/styles/pages/courses.css';
import Image from 'next/image';
import university from '@/public/assets/university.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from "@/app/ChatBot";

const courses = [
  {
    id: 1,
    title: 'Introduction to Financial Markets',
    institution: 'University of Finance',
    description: 'Learn the basics of financial markets, including stocks, bonds, and derivatives.',
    link: 'https://www.universityoffinance.com/course/intro-to-financial-markets',
  },
  {
    id: 2,
    title: 'Financial Planning and Analysis',
    institution: 'Finance Academy',
    description: 'A comprehensive course on financial planning, budgeting, and analysis techniques.',
    link: 'https://www.financeacademy.com/course/financial-planning-and-analysis',
  },
  {
    id: 3,
    title: 'Corporate Finance Essentials',
    institution: 'Business School Online',
    description: 'Understand the key concepts in corporate finance, including capital structure and investment decisions.',
    link: 'https://www.businessschoolonline.com/course/corporate-finance-essentials',
  },
  {
    id: 4,
    title: 'Personal Finance Management',
    institution: 'Wealth Management Institute',
    description: 'Learn how to manage your personal finances, including savings, investments, and retirement planning.',
    link: 'https://www.wealthmanagementinstitute.com/course/personal-finance-management',
  },
  {
    id: 5,
    title: 'Investment Strategies and Portfolio Management',
    institution: 'Investment Institute',
    description: 'Gain insights into various investment strategies and how to manage an investment portfolio effectively.',
    link: 'https://www.investmentinstitute.com/course/investment-strategies',
  },
  {
    id: 6,
    title: 'Behavioral Finance',
    institution: 'Psychology of Finance School',
    description: 'Explore how psychological factors influence financial decisions and market outcomes.',
    link: 'https://www.psychologyoffinanceschool.com/course/behavioral-finance',
  },
  {
    id: 7,
    title: 'Advanced Financial Modeling',
    institution: 'Excel Finance Academy',
    description: 'Learn advanced techniques in financial modeling using Excel for accurate financial forecasting.',
    link: 'https://www.excelfinanceacademy.com/course/advanced-financial-modeling',
  },
  {
    id: 8,
    title: 'Risk Management in Finance',
    institution: 'Global Finance University',
    description: 'Understand the principles of risk management and how to apply them in financial contexts.',
    link: 'https://www.globalfinanceuniversity.com/course/risk-management',
  },
  {
    id: 9,
    title: 'Cryptocurrency and Blockchain',
    institution: 'Tech Finance Institute',
    description: 'Learn about cryptocurrencies, blockchain technology, and their impact on the financial industry.',
    link: 'https://www.techfinanceinstitute.com/course/cryptocurrency-and-blockchain',
  },
  {
    id: 10,
    title: 'Financial Regulations and Compliance',
    institution: 'Regulatory Finance School',
    description: 'Explore the regulatory environment of financial markets and the importance of compliance.',
    link: 'https://www.regulatoryfinanceschool.com/course/financial-regulations',
  },
];

const Courses = () => {
    return (
        <>  <Navbar/>
      <div className="courses-container">
        <div className='courses-header'>
          <div>
          <h2>Financial Educational Courses</h2>
          <h3>Learn directly from reputed universities</h3>
          </div>
          <Image src={university} alt="University Image" className='uni-image' width={500} />
        </div>
        <div className='courses-header'>
        
        </div>
  
        <div className="courses-list">
          {courses.map(course => (
            <div key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <p><strong>Institution:</strong> <span className='insti'>{course.institution}</span></p>
              <p>{course.description}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      <Chatbot/>
      </>
      
    );
  }
  
  export default Courses;
