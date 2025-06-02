import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from '@/components/Footer';
import scholarship from "@/public/assets/scholarship.png";
import "@/styles/pages/home-student/studentsopportunities.css";
import Chatbot from "@/app/ChatBot";

function Studentinfo() {
  return (
    <>
      <Navbar />
      <div className="student-content-container">
        <div className="student-financing-page">
          <header className="student-header">
            <div className="header-content">
              <div className="header-left">
                <h1>విద్యార్థులకు ఆర్థిక అవకాశాలు</h1>
                <p>విద్యార్థులకు తగిన విధంగా ఆర్థిక అవకాశాల శ్రేణిని అన్వేషించండి&apos; స్కాలర్‌షిప్‌లు, గ్రాంట్లు, ఆర్థిక సహాయం, ఇంటర్న్‌షిప్‌లు మరియు ఫ్రీలాన్స్ వర్క్‌లతో సహా అవసరాలు.</p>
              </div>
              <div className="header-right">
                <Image src={scholarship} alt="Scholarship" width={100} height={100} />
              </div>
            </div>
          </header>

          <section className="scholarships">
            <div className='div'>
            <h2>స్కాలర్‌షిప్‌లు మరియు గ్రాంట్లు</h2>
            <p>విద్యార్థులకు అందుబాటులో ఉన్న స్కాలర్‌షిప్‌లు మరియు గ్రాంట్‌లను కనుగొనండి:</p>
            </div>
            <ul>
              <li>
                <h3>Scholarships.com</h3>
                <p>Fవిద్యావిషయక విజయాలు, పాఠ్యేతర కార్యకలాపాలు మరియు వ్యక్తిగత నేపథ్యాల ఆధారంగా ind స్కాలర్‌షిప్‌లు. <a href="https://www.scholarships.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>Fastweb</h3>
                <p>స్కాలర్‌షిప్‌లు, ఇంటర్న్‌షిప్‌లు మరియు పార్ట్‌టైమ్ ఉద్యోగాల కోసం శోధించండి. మీ ప్రొఫైల్ ఆధారంగా స్కాలర్‌షిప్‌లకు సరిపోలండి.<a href="https://www.fastweb.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>College Board</h3>
                <p>కళాశాలలు మరియు విశ్వవిద్యాలయాలు అందించే స్కాలర్‌షిప్ ప్రోగ్రామ్‌లను అన్వేషించండి. మెరిట్ ఆధారిత మరియు నీడ్-బేస్డ్ స్కాలర్‌షిప్‌ల గురించి సమాచారాన్ని పొందండి. <a href="https://bigfuture.collegeboard.org/scholarship-search" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>The Gates Scholarship</h3>
                <p>పెల్-అర్హత, మైనారిటీ, హైస్కూల్ సీనియర్‌లకు హాజరు స్కాలర్‌షిప్‌ల పూర్తి ఖర్చును అందిస్తుంది. <a href="https://www.thegatesscholarship.org/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>National Merit Scholarship</h3>
                <p>PSAT/NMSQT స్కోర్‌ల ఆధారంగా అధిక-సాధించే విద్యార్థులకు స్కాలర్‌షిప్‌లను గుర్తించి, ప్రదానం చేస్తుంది. <a href="https://www.nationalmerit.org/s/1758/interior.aspx?sid=1758&gid=2&pgid=424" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
            </ul>
          </section>

          <section className="financial-aid">
            <div className='div'>
            <h2>ఆర్ధిక సహాయం</h2>
            <p>సమాఖ్య మరియు సంస్థాగత ఆర్థిక సహాయ ఎంపికలను అన్వేషించండి:</p>
            </div>
            <ul>
              <li>
                <h3>FAFSA (Free Application for Federal Student Aid)</h3>
                <p>గ్రాంట్లు, రుణాలు మరియు వర్క్-స్టడీ ప్రోగ్రామ్‌లతో సహా ఫెడరల్ ఆర్థిక సహాయం కోసం దరఖాస్తు చేయడానికి FAFSA ఫారమ్‌ను పూర్తి చేయండి. <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>College Board</h3>
                <p>కళాశాలలు మరియు విశ్వవిద్యాలయాలు అందించే ఆర్థిక సహాయ అవకాశాలు మరియు స్కాలర్‌షిప్ ప్రోగ్రామ్‌ల కోసం శోధించండి. <a href="https://bigfuture.collegeboard.org/pay-for-college/financial-aid" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>Institutional Aid</h3>
                <p>గ్రాంట్లు, స్కాలర్‌షిప్‌లు మరియు ట్యూషన్ సహాయ కార్యక్రమాలతో సహా సంస్థాగత సహాయ ఎంపికల కోసం మీ కళాశాల లేదా విశ్వవిద్యాలయంతో తనిఖీ చేయండి.</p>
              </li>
            </ul>
          </section>

          <section className="internships">
            <div className='div'>
            <h2>ఇంటర్న్‌షిప్‌లు</h2>
            <p>ఇంటర్న్‌షిప్‌ల ద్వారా విలువైన పని అనుభవాన్ని పొందండి:</p>
            </div>
            <ul>
              <li>
                <h3>Internships.com</h3>
                <p>వివిధ పరిశ్రమలు మరియు స్థానాల్లో ఇంటర్న్‌షిప్‌ల కోసం శోధించండి. వ్యక్తిగతీకరించిన ఇంటర్న్‌షిప్ సిఫార్సులను స్వీకరించడానికి ప్రొఫైల్‌ను సృష్టించండి. <a href="https://www.internships.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>లింక్డ్ఇన్</h3>
                <p>లింక్డ్‌ఇన్ జాబ్ బోర్డ్‌లో కంపెనీలు పోస్ట్ చేసిన ఇంటర్న్‌షిప్ అవకాశాలను అన్వేషించండి. <a href="https://www.linkedin.com/jobs/internship-jobs/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>నిజానికి</h3>
                <p>ఇంటర్న్‌షిప్‌లు మరియు ఎంట్రీ-లెవల్ ఉద్యోగాల కోసం శోధించండి. స్థానం, జీతం మరియు కంపెనీ ఆధారంగా ఫిల్టర్ చేయండి. <a href="https://www.indeed.com/q-Internship-jobs.html" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
            </ul>
          </section>

          <section className="freelance">
            <div className='div'>
            <h2>ఫ్రీలాన్స్ వర్క్</h2>
            <p>చదువుతున్నప్పుడు ఆదాయాన్ని సంపాదించడానికి ఫ్రీలాన్స్ అవకాశాలను అన్వేషించండి:</p>
            </div>
            <ul>
              <li>
                <h3>అప్ వర్క్</h3>
                <p>రైటింగ్, డిజైన్, ప్రోగ్రామింగ్ మరియు మార్కెటింగ్‌తో సహా వివిధ రంగాలలో ఫ్రీలాన్స్ ఉద్యోగాలను కనుగొనండి. <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>Fiverr</h3>
                <p>Fiverr యొక్క ఫ్రీలాన్స్ ప్లాట్‌ఫారమ్‌లో ప్రపంచవ్యాప్తంగా ఉన్న ఖాతాదారులకు మీ నైపుణ్యాలు మరియు సేవలను అందించండి. <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
              <li>
                <h3>టాప్టల్</h3>
                <p>Toptal&apos; యొక్క టాప్ ఫ్రీలాన్సర్‌ల నెట్‌వర్క్‌లో చేరండి మరియు ప్రముఖ కంపెనీలతో అధిక-నాణ్యత ప్రాజెక్ట్‌లపై పని చేయండి. <a href="https://www.toptal.com/" target="_blank" rel="noopener noreferrer">వెబ్‌సైట్‌ని సందర్శించండి</a></p>
              </li>
            </ul>
          </section>

        </div>
      </div>
       <Footer />
<Chatbot/>
       
    </>
  );
}

export default Studentinfo;
