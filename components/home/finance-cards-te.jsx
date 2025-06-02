import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../../styles/components/home/finance-cards.css";

const FinanceCardsTe = ({ imageUrl, topic, url }) => {
  return (
    <div className='HomeCards'>
      <div>
      <div className="card-content ">
        <div className="card-image">
        <Image src={imageUrl} width={95} height={95} alt={topic} />
        </div>
      </div>
      <div className="card-text ">
        <h2>{topic}</h2>
        <Link href={url} passHref legacyBehavior>
          <a className='learn-more-button'>ఇంకా నేర్చుకో</a>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default FinanceCardsTe;
