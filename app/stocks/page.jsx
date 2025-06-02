import React from 'react';
import './Stocks.css';
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
        <h1>Stocks: What They Are, Main Types, How They Differ From Bonds</h1>
        <div className='img'>
        <Image src="/stockdef.jpg" width={750} height={200}/>
        </div>
        <div className="content">
          <p>
            Stocks, also known as equities, represent ownership in a company. When you purchase a stock, you are buying a small piece of that company, known as a share. This ownership entitles you to a portion of the company’s profits, which may be distributed in the form of dividends. Stocks are a fundamental part of the financial markets and can be an important component of an investment portfolio.
          </p>
          <h2>What Are Stocks?</h2>
          <p>
            Stocks are financial instruments that signify ownership in a corporation and represent a claim on part of the corporation&aposs assets and earnings. There are two main types of stocks:
          </p>
          <ul>
            <li>
              <strong>Common Stock:</strong> This type of stock entitles the owner to vote at shareholders&apos meetings and to receive dividends. Common shareholders are last in line to be compensated if the company goes bankrupt.
            </li>
            <li>
              <strong>Preferred Stock:</strong> Preferred shareholders generally do not have voting rights but have a higher claim on assets and earnings than the common shareholders. Dividends for preferred stocks are typically higher and are paid before any dividends to common shareholders.
            </li>
          </ul>
          <h2>What Is the Difference Between Stocks and Bonds?</h2>
          <p>Stocks and bonds are two of the most common investment types, but they represent different ways to invest in a company or government.</p>
          <ul>
            <li>
              <strong>Stocks</strong><br/>
              <strong>Ownership:</strong> When you buy a stock, you become a partial owner of the company. This ownership is represented by shares.<br/>
              <strong>Profit:</strong> Your potential profit comes from an increase in the stock&aposs price (capital gains) and possibly dividends, which are a share of the company&aposs profits paid to shareholders.<br/>
              <strong>Risk:</strong> Stocks are generally riskier because their value can fluctuate widely based on the company&aposs performance and market conditions. If the company does well, the stock price can increase significantly, but if the company performs poorly, the stock price can drop.<br/><br/>

              <strong>Bonds</strong><br/>
              <strong>Lending:</strong> When you buy a bond, you are essentially lending money to the issuer (a company or government). In return, the issuer promises to pay back the loan with interest over a specified period.<br/>
              <strong>Profit:</strong> Your profit comes from the interest payments, known as coupon payments, made by the issuer, and the return of the bond&aposs face value when it matures.<br/>
              <strong>Risk:</strong> Bonds are generally considered safer than stocks because they provide regular interest payments and the return of principal at maturity. However, they still carry some risk, such as the issuer defaulting on payments or changes in interest rates affecting bond prices.<br/><br/>
              <strong>Key Differences</strong><br/>
              <strong>1. Nature of Investment:</strong><br/>
              <strong>Stocks:</strong> <p>You own a piece of the company.</p>
              <strong>Bonds:</strong> <p>You lend money to the issuer.</p>
              <strong>2. Return on Investment:</strong><br/>
              <strong>Stocks:</strong> <p>Potential for higher returns through price appreciation and dividends, but with higher risk.</p>
              <strong>Bonds:</strong> <p>More stable returns through regular interest payments, typically with lower risk.</p>
              <strong>3. Risk Level:</strong><br/>
              <strong>Stocks:</strong> <p>Higher risk due to market volatility and company performance.</p>
              <strong>Bonds:</strong> <p>Lower risk, especially with government bonds, but still subject to interest rate and default risk.</p>
            </li>
          </ul>
          <h2>How Do Stocks Work?</h2>
          <p>
            When you buy a stock, you become a shareholder in the company. The value of a stock can fluctuate based on the company&aposs performance, the economy, and other factors. Investors buy stocks with the hope that the price will rise over time, allowing them to sell the stock at a profit. Additionally, some stocks pay dividends, which provide a regular income to shareholders.
          </p>
          <h2>Why Invest in Stocks?</h2>
          <p>Investing in stocks can be beneficial for several reasons:</p>
          <ul>
            <li>
              <strong>Growth Potential:</strong> Stocks have the potential for higher returns over time compared to other investment vehicles such as bonds or savings accounts.
            </li>
            <li>
              <strong>Income Through Dividends:</strong> Many companies pay dividends to their shareholders, providing a steady income stream.
            </li>
            <li>
              <strong>Ownership in a Company:</strong> Owning stock means you have a stake in the company&aposs future and can vote on important company matters.
            </li>
          </ul>
          <h2>Risks of Investing in Stocks</h2>
          <p>While stocks can offer significant rewards, they also come with risks:</p>
          <ul>
            <li>
              <strong>Market Risk:</strong> The value of stocks can fluctuate due to changes in the market.
            </li>
            <li>
              <strong>Company Risk:</strong> Poor performance or business decisions by the company can reduce the value of its stock.
            </li>
            <li>
              <strong>Economic Risk:</strong> Economic downturns can negatively impact stock prices across the board.
            </li>
          </ul>
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
