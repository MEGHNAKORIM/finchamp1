// components/Headlines.js
import React from 'react';
import "../../styles/components/home/headlines.css"

const headlines = [
  { title: "Treasury Yields Slide Amidst Global Economic Uncertainty", url: "https://example.com/treasury-yields-slide" },
  { title: "Oracle Stocks Surge Following Positive Earnings Report", url: "https://example.com/oracle-stocks-surge" },
  { title: "Zimbabwe Scraps VAT on Gold to Boost Mining Sector", url: "https://example.com/zimbabwe-scraps-vat" },
  { title: "Sustainable Finance Gains Traction in Fiji's Economic Strategy", url: "https://example.com/sustainable-finance-fiji" },
  { title: "Mortgage Rates Decline, Offering Relief to Homeowners", url: "https://example.com/mortgage-rates-decline" },
  { title: "Enel Green Power Secures Major Financing for Renewable Projects", url: "https://example.com/enel-green-power-financing" },
  { title: "Vietnam Implements Tax Increase on Alcohol to Fund Public Health Initiatives", url: "https://example.com/vietnam-tax-increase" },
  { title: "Romania Introduces Changes in Mortgage Rules to Stimulate Housing Market", url: "https://example.com/romanian-mortgage-rules" },
  { title: "Economic Outlook Brightens with Positive Growth Projections", url: "https://example.com/economic-outlook" },
];

const Headlines = () => {
  return (
    <div className="headlines-container">
      <h1 className="headlines-title">Latest Headlines</h1>
      <ul className="headlines-list">
        {headlines.map((headline, index) => (
          <li key={index} className="headlines-listItem">
            <a href={headline.url} target="_blank" rel="noopener noreferrer" className="headlines-link">
              {headline.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headlines;
