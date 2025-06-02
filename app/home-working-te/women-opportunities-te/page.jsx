// WomenFinanceOpportunities.jsx
import React from 'react';
import Image from 'next/image';
import "@/styles/pages/home-working.css";
import woman from "@/public/assets/woman.png";
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import Chatbot from "@/app/ChatBot";

function Workinginfo() {
  return (

    <>
      <Navbar/>
    <div className="women-finance-opportunities">
      <div className='women-page'>
        <header className='women-header'>
            <div className='header-content'>
                <div className='header-left'>
                    <h1>మహిళలకు ఆర్థిక అవకాశాలు</h1>
                    <p>స్కాలర్‌షిప్‌లు, రుణాలు, ఆర్థిక సహాయం, ఇంటర్న్‌షిప్‌లు మరియు కెరీర్ డెవలప్‌మెంట్‌తో సహా మహిళల అవసరాలకు అనుగుణంగా ఆర్థిక అవకాశాలను అన్వేషించండి.</p>
                </div>
                <div className="header-right">
                    <Image src={woman} alt="Scholarship" width={100} height={100}/>
                </div>
            </div>
        </header>

      <section className="w-scholarships">
        <div className='div'>
        <h2>స్కాలర్‌షిప్‌లు మరియు గ్రాంట్లు</h2>
        <p>మహిళలకు అందుబాటులో ఉన్న స్కాలర్‌షిప్‌లు మరియు గ్రాంట్‌లను కనుగొనండి:</p>
        <ul>
          <li>
            <h3>AAUW (అమెరికన్ అసోసియేషన్ ఆఫ్ యూనివర్శిటీ ఉమెన్)</h3>
            <p>ఉన్నత విద్యను అభ్యసించే మహిళలకు స్కాలర్‌షిప్‌లు మరియు ఫెలోషిప్‌లను అందిస్తుంది. <a href="https://www.aauw.org/" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
          <li>
            <h3>జెన్నెట్ రాంకిన్ ఉమెన్స్ స్కాలర్‌షిప్ ఫండ్</h3>
            <p>35 మరియు అంతకంటే ఎక్కువ వయస్సు గల తక్కువ-ఆదాయ మహిళలకు స్కాలర్‌షిప్‌లు మరియు మద్దతును అందిస్తుంది. <a href="https://rankinfoundation.org/" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
        </ul>
        </div>
      </section>

      <section className="w-loans">
        <div className='div'>
        <h2>రుణాలు</h2>
        <p>మహిళల ఆర్థిక అవసరాలకు మద్దతుగా రూపొందించిన రుణాలను అన్వేషించండి:</p>
        <ul>
          <li>
            <h3>మహిళల యాజమాన్యంలోని వ్యాపారాల కోసం స్మాల్ బిజినెస్ అడ్మినిస్ట్రేషన్ (SBA) రుణాలు</h3>
            <p>మహిళా వ్యాపారవేత్తలకు అనుకూలమైన నిబంధనలు మరియు మద్దతుతో రుణాలను అందిస్తుంది. <a href="https://www.sba.gov/funding-programs/loans/women-owned-business-loans" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
        </ul>
        </div>
      </section>

      <section className="w-financial-aid">
        <div className='div'>
        <h2>ఆర్ధిక సహాయం</h2>
        <p>మహిళల కోసం సమాఖ్య మరియు సంస్థాగత ఆర్థిక సహాయ ఎంపికలను అన్వేషించండి:</p>
        <ul>
          <li>
            <h3>మహిళల ఎడ్యుకేషనల్ ఈక్విటీ చట్టం (WEEA)</h3>
            <p>విద్యలో లింగ సమానత్వాన్ని ప్రోత్సహించే ప్రాజెక్ట్‌లకు మద్దతుగా గ్రాంట్‌లను అందిస్తుంది. <a href="https://www2.ed.gov/about/offices/list/oese/women-equity/index.html" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
          {/* Add more financial aid options */}
        </ul>
        </div>
      </section>

      <section className="w-internships">
        <div className='div'>
        <h2>ఇంటర్న్‌షిప్‌లు</h2>
        <p>మహిళల సాధికారతపై దృష్టి సారించిన ఇంటర్న్‌షిప్ అవకాశాలను అన్వేషించండి:</p>
        <ul>
          <li>
            <h3>ఉమెన్ ఇన్ టెక్నాలజీ ఇంటర్న్‌షిప్ ప్రోగ్రామ్</h3>
            <p>సాంకేతిక రంగాలలో వృత్తిని అభ్యసిస్తున్న మహిళలకు ఇంటర్న్‌షిప్‌లను అందిస్తుంది. <a href="https://www.womentech.net/" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
          {/* Add more internship opportunities */}
        </ul>
        </div>
      </section>

      <section className="w-career-development">
        <div className='div'>
        <h2>కెరీర్ అభివృద్ధి</h2>
        <p>మహిళల కెరీర్ పురోగతి మరియు వృత్తిపరమైన వృద్ధి కోసం వనరులను కనుగొనండి:</p>
        <ul>
          <li>
            <h3>లీన్ ఇన్</h3>
            <p>నాయకత్వ పాత్రలను అనుసరించే మహిళలకు సంఘం మద్దతు మరియు వనరులను అందిస్తుంది. <a href="https://leanin.org/" target="_blank" rel="noopener noreferrer" className='v-w'>వెబ్‌సైట్‌ని సందర్శించండి</a></p>
          </li>
          {/* Add more career development resources */}
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

export default Workinginfo;
