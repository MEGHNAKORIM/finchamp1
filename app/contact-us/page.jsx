"use client";

import React from 'react';
import "@/styles/pages/contact-us.css"
import Image from 'next/image';
import msg_icon from '@/public/assets/msg-icon.png';
import mail_icon from '@/public/assets/mail-icon.png';
import phone_icon from '@/public/assets/phone-icon.png';
import location_icon from '@/public/assets/location-icon.png';
import warrow from "@/public/assets/white-arrow.png";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "364e8f86-916e-4ed8-bad0-2f30701ea703");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <Navbar/>
    <div className="contact">
      <div className="contact-col">
        <h3>
            <div className="heading">Send Us The Feedback
                </div> <Image src={msg_icon} alt="" width={75} height={75} className='ml-16'/></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <div className='info'>
        <ul>
          <li><Image src={mail_icon} alt="" width={50} height={50}/>finchamp24@gmail.com</li>
          <li><Image src={phone_icon} alt=""width={50} height={50} />+91 4749801467</li>
          <li><Image src={location_icon} alt="" width={50} height={50}/>Hyderabad, Telangana</li>
        </ul>
        </div>
      </div>
      <div className="contact-col review">
        <form onSubmit={onSubmit}>
          <label className='label'>Your Name</label>
          <input type="text" name="name" placeholder='Enter your name' className="input" required />
          
          <label className='label'>Email</label>
          <input type="email" name="email" placeholder='Enter your email' className="input" required />

          <label className='label'>Phone Number (Optional)</label>
          <input type="tel" name="phone" placeholder='Enter your mobile number' className="input" />
          
          
          <br/>
          <label className='label'>Write Your Feedback</label>
          <textarea name="message" rows="6" placeholder='Enter your message' className="input" required />
          
          <button type="submit" className='btn dark-btn className="input"'>
            Submit<Image src={warrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
      <Footer/>
    </>

  );
};

export default Contact;
