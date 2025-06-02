import React from "react";
import Image from "next/image";
import "../../styles/pages/fin.css"; // Directly import the CSS file

function FinHeader() {
  return (
    <header className="fin-header">
      <h1>FinChamp Stock Exchange</h1>
      <Image src="/assets/buy.png" className="buy" width={80} height={80} />
    </header>
  );
}

export default FinHeader;
