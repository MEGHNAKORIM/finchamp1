import React from 'react';
import './Insurance.css';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Chatbot from '../ChatBot';
import Footer from '@/components/Footer';
import Link from 'next/link';

const Stocks = () => {
  return (
    <>
      <Navbar />
      <div className="stocks-container">
        <div className='contents'>
        <h1>Understanding Insurance: A Brief Overview</h1>
        <div className='img'>
        <Image src="/insurancedef.jpg" width={750} height={200}/>
        </div>
        <div className="content">
        <section>
        <h2>Understanding Insurance: A Brief Overview</h2>
        <p>
          Insurance is a financial product designed to protect individuals, businesses, 
          and other entities from financial loss or liability that may arise from unforeseen events.
          It works on the principle of risk management, where individuals or entities transfer 
          the risk of potential loss to an insurance company in exchange for regular payments 
          known as premiums.
        </p>
      </section>
      
      <section>
        <h2>Key Concepts in Insurance</h2>
        <ul>
          <li><strong>Policyholder:</strong> The person or entity that purchases the insurance policy.</li>
          <li><strong>Insurance Company (Insurer):</strong> The company that provides the insurance coverage.</li>
          <li><strong>Premium:</strong> The amount paid by the policyholder to the insurer at regular intervals.</li>
          <li><strong>Coverage:</strong> Specifies what risks or events are covered and the compensation in case of loss.</li>
        </ul>
      </section>
      
      <section>
        <h2>Types of Insurance</h2>
        <ul>
          <li><strong>Life Insurance:</strong> Provides financial protection to beneficiaries.</li>
          <li><strong>Health Insurance:</strong> Covers medical expenses and related costs.</li>
          <li><strong>Property Insurance:</strong> Protects against damage to property.</li>
          <li><strong>Liability Insurance:</strong> Covers legal liabilities.</li>
          <li><strong>Business Insurance:</strong> Tailored for businesses, including property and liability coverage.</li>
        </ul>
      </section>
      
      <section>
        <h2>How Insurance Works</h2>
        <p>
          When a policyholder experiences a covered loss, they file a claim with the insurer. 
          The insurer assesses the claim and compensates the policyholder according to the policy terms.
        </p>
      </section>
      
      <section>
        <h2>Benefits of Insurance</h2>
        <ul>
          <li>Provides financial security and peace of mind.</li>
          <li>Allows for risk transfer to the insurer.</li>
          <li>Helps in legal compliance where required.</li>
        </ul>
      </section>
      
      <section>
        <h2>Choosing the Right Insurance</h2>
        <p>
          Selecting appropriate coverage involves considering needs, budget, and comparing policies. 
          Understanding terms and conditions is crucial for making an informed decision.
        </p>
      </section>
          <Link href="/courses" className='button'>Wanna take a Quiz?</Link>
        </div>
        </div>
      </div>
      <Footer/>
      <Chatbot/>
    </>
  );
};

export default Stocks;
