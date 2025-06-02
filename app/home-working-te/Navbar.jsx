"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import Modal from '@/components/Modal';
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import logo from "@/public/assets/logo.png";
import "@/styles/components/Navbar.css";
import { Button } from '@/components/ui/button';


const Navbar = ({ user = {} }) => {
  const router = useRouter(); // Initialize useRouter hook

  const [showNavbar, setShowNavbar] = useState(false);
  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logos">
          <Image src={logo} alt="FinChamp Logo" width={50} height={50}/>
          <span className="logo-text">ఫిన్‌చాంప్</span>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
           <div className='hover'>
           <Button href="/home-student" variant="dropdown" onClick={() => router.push("/home-student")}>హోమ్</Button>
            <Button href='/learn' variant="dropdown" onClick={() => router.push("/courses")}>నేర్చుకో</Button>
            <Button href='/uni-courses' variant="dropdown" onClick={() => router.push("/uni-courses")}>కోర్సులు</Button>
            <Button href='/news' variant="dropdown" onClick={() => router.push("/news")}>వార్తలు</Button>
            <Button href='/trade' variant="dropdown" onClick={() => router.push("/trade")}>వర్తకం</Button>
            <Button href='/contact-us' variant="dropdown" onClick={() => router.push("/contact-us")}>సంప్రదించండి</Button>
            </div> 
          </ul>
        </div>
        <div className='flex justify-center'>
        <div class="dropdown">
          <Button class="dropbtn" variant="dropdown">వర్గం</Button>
          <div class="dropdown-content">
            <a href="/home-student-te">విద్యార్థి</a>
            <a href="/home-working-te">పని చేస్తోంది</a>
            <a href="/home-retiree-te">పదవీ విరమణ పొందిన వ్యక్తి</a>
          </div>
        </div>

          {/* LANG */}
        <div class="dropdown">
          <Button class="dropbtn" variant="dropdown">భాష</Button>
          <div class="dropdown-content">
            <a href="home-working">English</a>
            <a href="home-working-te">తెలుగు</a>
          </div>
        </div>
        </div>
        <ClerkLoading>
                <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton afterSignOutUrl="/" />
              </ClerkLoaded>
      </div>
      
    </nav>
  );
};

export default Navbar;
