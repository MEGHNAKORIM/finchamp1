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
  

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logos">
          <Image src={logo} alt="FinChamp Logo" width={50} height={50}/>
          <span className="logo-text">FinChamp</span>
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>
          <ul>
           <div className='hover'>
           <Button href="/home-student" variant="dropdown" onClick={() => router.push("/home-student")}>Home</Button>
            <Button href='/learn' variant="dropdown" onClick={() => router.push("/courses")}>Learn</Button>
            <Button href='/uni-courses' variant="dropdown" onClick={() => router.push("/uni-courses")}>Courses</Button>
            <Button href='/news' variant="dropdown" onClick={() => router.push("/news")}>News</Button>
            <Button href='/trade' variant="dropdown" onClick={() => router.push("/trade")}>Trade</Button>
            <Button href='/contact-us' variant="dropdown" onClick={() => router.push("/contact-us")}>Contact Us</Button>
            </div> 
          </ul>
        </div>
        <div className='flex justify-center'>
        <div class="dropdown">
          <Button class="dropbtn" variant="dropdown">Category</Button>
          <div class="dropdown-content">
            <a href="/home-student">Student</a>
            <a href="/home-working">Working</a>
            <a href="/home-retiree">Retiree</a>
          </div>
        </div>

          {/* LANG */}
        <div class="dropdown">
          <Button class="dropbtn" variant="dropdown">Language</Button>
          <div class="dropdown-content">
            <a href="home-retiree">English</a>
            <a href="home-retiree-te">తెలుగు</a>
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
