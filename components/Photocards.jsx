import React from 'react';
import Image from 'next/image';
import './PhotoCards.css';
import img1 from '@/public/assets/Photos/img1.jpg';
import img2 from '@/public/assets/Photos/img2.jpg';
import img3 from '@/public/assets/Photos/img13.jpg';
import img4 from '@/public/assets/Photos/img4.jpg';
import img5 from '@/public/assets/Photos/img5.jpg';
import img6 from '@/public/assets/Photos/img8.jpg';
import img7 from '@/public/assets/Photos/img12.jpg';
import img8 from '@/public/assets/Photos/img3.jpg';
import img9 from '@/public/assets/Photos/img9.jpg';
import img10 from '@/public/assets/Photos/img10.jpg';
import img11 from '@/public/assets/Photos/img3.jpg';
import img12 from '@/public/assets/Photos/img7.jpg';
import img13 from '@/public/assets/Photos/img6.jpg';
import img14 from '@/public/assets/Photos/img14.jpg';
import img15 from '@/public/assets/Photos/img15.jpg';


const images = [
  { src: img1, alt: 'Image 1', description: 'Global Markets React to Central Bank Interest Rate Decisions' },
  { src: img2, alt: 'Image 2', description: 'Tech Stocks Surge Amid Positive Earnings Reports' },
  { src: img3, alt: 'Image 3', description: 'Government Announces New Fiscal Stimulus Package to Boost Economy' },
  { src: img4, alt: 'Image 4', description: 'Federal Reserve Signals Potential Rate Hikes in Upcoming Meetings' },
  { src: img5, alt: 'Image 5', description: 'Inflation Fears Drive Bond Yields Higher' },
  { src: img6, alt: 'Image 6', description: 'Real Estate Market Boom: Home Prices Reach Historic Levels' },
  { src: img7, alt: 'Image 7', description: 'Major Banks Report Record Profits Despite Economic Uncertainty' },
  { src: img8, alt: 'Image 8', description: 'Fintech Innovations Transforming Traditional Banking Industry' },
  { src: img9, alt: 'Image 9', description: 'Small Businesses Struggle with Rising Operational Costs' },
  { src: img10, alt: 'Image 10', description: 'Mergers and Acquisitions Surge in Technology Sector' },
  { src: img11, alt: 'Image 11', description: 'Cryptocurrency Market Volatility Continues as Bitcoin Hits New Highs' },
  { src: img12, alt: 'Image 12', description: 'ESG Investing Gains Traction as More Funds Embrace Sustainable Practices' },
  { src: img13, alt: 'Image 13', description: 'Oil Prices Fluctuate Amid Geopolitical Tensions' },
  { src: img14, alt: 'Image 14', description: 'Global Supply Chain Disruptions Impacting Manufacturing Sector' },
  { src: img15, alt: 'Image 15', description: 'Emerging Markets Attract Investors Seeking Higher Returns' },
];

// Function to format date as DD/MM/YYYY
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const PhotoCards = () => {
  return (
    <div className="photo-cards">
      {images.map((image, index) => (
        <div key={index} className="photo-card">
          <Image src={image.src} alt={image.alt} />
          <p>{image.description}</p>
          <h4>Date: {formatDate(new Date())}</h4>
        </div>
      ))}
    </div>
  );
};

export default PhotoCards;
