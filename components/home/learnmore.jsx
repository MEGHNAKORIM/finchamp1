import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import "../../styles/components/home/learnmore.css";


const LearnMoreCard = (props) => {


  return (
    <div className="learn-more-card">
      <h2 className="learn-more-card-title">{props.title}</h2>
      <p className="learn-more-card-description">{props.description}</p>
      <Link href={props.url} className="learn"> Learn More
     
      </Link>
    </div>
  )
}

export default LearnMoreCard;
