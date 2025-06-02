"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter hook
import Modal from './Modal';
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import logo from "@/public/assets/logo.png";
import "@/styles/components/Navbar.css";
import { Button } from './ui/button';


const Navbar = ({ user = {} }) => {
  const router = useRouter(); // Initialize useRouter hook

  const [showNavbar, setShowNavbar] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(user.category || '');
  const [selectedLang, setSelectedLang] = useState(user.lang || '');
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const handleLangModal = () => {
    setIsLangModalOpen(!isLangModalOpen);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

   
    if (category === 'student') {
      router.push('/home-student');
    } else if (category === 'professional') {
      router.push('/home-working');
    } else if (category === 'retiree') {
      router.push('/home-retiree');
    }

    setIsProfileModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const category = selectedCategory;

    if (category === 'student') {
      router.push('/home-student');
    } else if (category === 'professional') {
      router.push('/home-working');
    } else if (category === 'retiree') {
      router.push('/home-retiree');
    }

    setIsProfileModalOpen(false);
  };

  //lang
  const handleLanguageChange = (event) => {
    const id = event.target.id;
    if (id === 'english') {
      router.push('/home-retiree/retiree-opportunities');
    } else if (id === 'telugu') {
      router.push('/home-retiree-te/retiree-opportunities-te');
    }
  };


  const handlesubmit = (event) => {
    event.preventDefault();
    const lang = selectedLang;

    if (lang === 'English') {
      router.push('/home-retiree');
    } else if (lang === 'Telugu') {
      router.push('/home-retiree-te');
    }

    setIsLangModalOpen(false);
  };

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
            <Button href='/trade' variant="dropdown" onClick={() => router.push("/trade")}>వాణిజ్యం</Button>
            <Button href='/contact-us' variant="dropdown" onClick={() => router.push("/contact-us")}>సంప్రదించండి</Button>
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
          <Button class="dropbtn" variant="dropdown">Lang</Button>
          <div class="dropdown-content">
            <a href={handleLanguageChange} id="english" onClick={handleLanguageChange}>English</a>
            <a href={handleLanguageChange} id="telugu" onClick={handleLanguageChange}>తెలుగు</a>
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
