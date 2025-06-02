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
  { src: img1, alt: 'Image 1', description: 'సెంట్రల్ బ్యాంక్ వడ్డీ రేటు నిర్ణయాలకు గ్లోబల్ మార్కెట్లు ప్రతిస్పందిస్తాయి' },
  { src: img2, alt: 'Image 2', description: 'సానుకూల ఆదాయ నివేదికల మధ్య టెక్ స్టాక్స్ ఊపందుకున్నాయి' },
  { src: img3, alt: 'Image 3', description: 'ఆర్థిక వ్యవస్థను పెంచేందుకు ప్రభుత్వం కొత్త ఆర్థిక ఉద్దీపన ప్యాకేజీని ప్రకటించింది' },
  { src: img4, alt: 'Image 4', description: 'ఫెడరల్ రిజర్వ్ రాబోయే సమావేశాల్లో సంభావ్య రేట్ల పెంపునకు సంకేతాలు' },
  { src: img5, alt: 'Image 5', description: 'ద్రవ్యోల్బణం భయాలు బాండ్ దిగుబడిని పెంచుతాయి' },
  { src: img6, alt: 'Image 6', description: 'రియల్ ఎస్టేట్ మార్కెట్ బూమ్: ఇంటి ధరలు చారిత్రాత్మక స్థాయికి చేరుకున్నాయి' },
  { src: img7, alt: 'Image 7', description: 'ఆర్థిక అనిశ్చితి ఉన్నప్పటికీ ప్రధాన బ్యాంకులు లాభాలను నమోదు చేశాయి' },
  { src: img8, alt: 'Image 8', description: 'ఫిన్‌టెక్ ఆవిష్కరణలు సాంప్రదాయ బ్యాంకింగ్ పరిశ్రమను మారుస్తున్నాయి' },
  { src: img9, alt: 'Image 9', description: 'చిన్న వ్యాపారాలు పెరుగుతున్న నిర్వహణ ఖర్చులతో పోరాడుతున్నాయి' },
  { src: img10, alt: 'Image 10', description: 'సాంకేతిక రంగంలో విలీనాలు మరియు సముపార్జనల పెరుగుదల' },
  { src: img11, alt: 'Image 11', description: 'బిట్‌కాయిన్ కొత్త గరిష్టాలను తాకడంతో క్రిప్టోకరెన్సీ మార్కెట్ అస్థిరత కొనసాగుతుంది' },
  { src: img12, alt: 'Image 12', description: 'మరిన్ని ఫండ్‌లు స్థిరమైన పద్ధతులను స్వీకరించినందున ESG ఇన్వెస్టింగ్ ట్రాక్షన్‌ను పొందుతుంది' },
  { src: img13, alt: 'Image 13', description: 'భౌగోళిక రాజకీయ ఉద్రిక్తతల మధ్య చమురు ధరలు హెచ్చుతగ్గులకు గురవుతున్నాయి' },
  { src: img14, alt: 'Image 14', description: 'గ్లోబల్ సప్లై చైన్ అంతరాయాలు తయారీ రంగాన్ని ప్రభావితం చేస్తున్నాయి' },
  { src: img15, alt: 'Image 15', description: 'ఎమర్జింగ్ మార్కెట్లు అధిక రాబడిని కోరుకునే పెట్టుబడిదారులను ఆకర్షిస్తాయి' },
];

// Function to format date as DD/MM/YYYY
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const PhotoCardsTe = () => {
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

export default PhotoCardsTe;
