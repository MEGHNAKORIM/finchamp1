// components/Headlines.js
import React from 'react';
import "../../styles/components/home/headlines.css"

const headlines = [
  { title: "గ్లోబల్ ఎకనామిక్ అనిశ్చితి మధ్య ట్రెజరీ దిగుబడి స్లైడ్", url: "https://example.com/treasury-yields-slide" },
  { title: "సానుకూల ఆదాయ నివేదిక తర్వాత ఒరాకిల్ స్టాక్స్ ఊపందుకున్నాయి", url: "https://example.com/oracle-stocks-surge" },
  { title: "మైనింగ్ రంగాన్ని పెంచేందుకు జింబాబ్వే బంగారంపై వ్యాట్‌ను రద్దు చేసింది", url: "https://example.com/zimbabwe-scraps-vat" },
  { title: "ఫిజీ యొక్క ఆర్థిక వ్యూహంలో స్థిరమైన ఫైనాన్స్ ట్రాక్షన్ పొందుతుంది", url: "https://example.com/sustainable-finance-fiji" },
  { title: "తనఖా రేట్లు తగ్గాయి, గృహయజమానులకు ఉపశమనం అందించడం", url: "https://example.com/mortgage-rates-decline" },
  { title: "ఎనెల్ గ్రీన్ పవర్ పునరుత్పాదక ప్రాజెక్ట్‌ల కోసం ప్రధాన ఫైనాన్సింగ్‌ను పొందుతుంది", url: "https://example.com/enel-green-power-financing" },
  { title: "వియత్నాం పబ్లిక్ హెల్త్ ఇనిషియేటివ్‌లకు నిధులు సమకూర్చడానికి మద్యంపై పన్ను పెంపును అమలు చేస్తుంది", url: "https://example.com/vietnam-tax-increase" },
  { title: "రొమేనియా హౌసింగ్ మార్కెట్‌ను ఉత్తేజపరిచేందుకు తనఖా నియమాలలో మార్పులను పరిచయం చేసింది", url: "https://example.com/romanian-mortgage-rules" },
  { title: "సానుకూల వృద్ధి అంచనాలతో ఆర్థిక ఔట్‌లుక్ ప్రకాశవంతం అవుతుంది", url: "https://example.com/economic-outlook" },
];

const HeadlinesTe = () => {
  return (
    <div className="headlines-container">
      <h1 className="headlines-title">తాజా ముఖ్యాంశాలు</h1>
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

export default HeadlinesTe;
