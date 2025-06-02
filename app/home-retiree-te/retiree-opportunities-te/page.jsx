// RetirementPage.jsx
import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import "@/styles/pages/home-retiree.css"
import retire from "@/public/assets/retirement1.png";
import Chatbot from "@/app/ChatBot";



function Retireeinfo() {
  return (
    <>
    <Navbar/>
    <div className="retirement-page">
      <div className='retiree'>
        <header className="retirement-header">
            <div className='header-content'>
                <div className='header-left'>
                    <h1>మీ పదవీ విరమణ పొందడం</h1>
                    <p>సురక్షితమైన భవిష్యత్తు కోసం ప్లాన్ చేయడంలో మీకు సహాయపడటానికి రూపొందించబడిన పదవీ విరమణ అవకాశాల శ్రేణిని కనుగొనండి. రిటైర్‌మెంట్ సేవింగ్స్ ప్లాన్‌ల నుండి పోటీ రాబడితో నిపుణుల ఆర్థిక సలహా వరకు, సౌకర్యవంతమైన మరియు ఆందోళన లేని పదవీ విరమణను నిర్ధారించడానికి మీకు అవసరమైన వనరులను మేము అందిస్తున్నాము.</p>
                </div>
                <div className="header-right">
                    <Image src={retire} width={100} height={100} alt={''}/>
                </div>
            </div>
        </header>

      <section className="light-purple-section">
        <div className='div'>
        <div className='div'>
        <h2>పదవీ విరమణ పొదుపు ప్రణాళికలు</h2>
        <p>మీ అవసరాలకు అనుగుణంగా రిటైర్మెంట్ పొదుపు ప్రణాళికలను అన్వేషించండి:</p>
        </div>
        <ul>
          <li>
            <h3>401(k)</h3>
            <p>ఉద్యోగులు తమ చెల్లింపు చెక్కులో కొంత భాగాన్ని పన్నులకు ముందు ఆదా చేయడానికి మరియు పెట్టుబడి పెట్టడానికి అనుమతించే యజమాని-ప్రాయోజిత పదవీ విరమణ ప్రణాళిక. <a href="https://www.irs.gov/retirement-plans/401k-plans" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
          <li>
            <h3>IRA (వ్యక్తిగత పదవీ విరమణ ఖాతా)</h3>
            <p>రిటైర్మెంట్ కోసం ఆదా చేయడానికి వ్యక్తులు పన్ను ప్రయోజనాలను అందించే వ్యక్తిగత రిటైర్మెంట్ ఖాతా. <a href="https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
        </ul>
        </div>
      </section>

      <section className="dark-purple-section">
        <div className='div'>
        <div className='div'>
        <h2>నిపుణుల ఆర్థిక సలహా</h2>
        <p>పదవీ విరమణ ప్రణాళికపై నిపుణుల సలహా పొందండి:</p>
        </div>
        <ul>
          <li>
            <h3>ఆర్థిక సలహాదారు సంప్రదింపులు</h3>
            <p>వ్యక్తిగతీకరించిన పదవీ విరమణ వ్యూహాన్ని రూపొందించడానికి సర్టిఫైడ్ ఫైనాన్షియల్ ప్లానర్‌ని కలవండి. <a href="#" className='v-w'>ఇంకా నేర్చుకో</a></p>
          </li>
          <li>
            <h3>రిటైర్మెంట్ ప్లానింగ్ వర్క్‌షాప్‌లు</h3>
            <p>పదవీ విరమణ ప్రణాళిక ఉత్తమ అభ్యాసాల గురించి తెలుసుకోవడానికి వర్క్‌షాప్‌లు మరియు సెమినార్‌లకు హాజరవ్వండి. <a href="#" className='v-w'>ఇంకా నేర్చుకో</a></p>
          </li>
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

export default Retireeinfo;
