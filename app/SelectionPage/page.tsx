"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClerkLoading, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "./SelectionPage.css";
import Chatbot from "../ChatBot";

interface Selection {
  country: string;
  category: string;
}

export default function SelectionPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selections, setSelections] = useState<Selection[]>([]);

  useEffect(() => {
    if (isLoaded && userId) {
      router.push("/SelectionPage");
    }
  }, [isLoaded, userId, router]);

  const countries = [
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' },
    { value: 'ca', label: 'Canada' },
    { value: 'cn', label: 'China' },
    { value: 'fr', label: 'France' },
    { value: 'de', label: 'Germany' },
    { value: 'in', label: 'India' },
    { value: 'id', label: 'Indonesia' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
    { value: 'mx', label: 'Mexico' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'pk', label: 'Pakistan' },
    { value: 'ph', label: 'Philippines' },
    { value: 'ru', label: 'Russia' },
    { value: 'za', label: 'South Africa' },
    { value: 'kr', label: 'South Korea' },
    { value: 'es', label: 'Spain' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'us', label: 'United States' }
  ];

  const handleCountryChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedCountry(e.target.value);
  };

  const handleCategorySelection = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const onNext = () => {
    if (selectedCountry && selectedCategory) {
      const newSelection = { country: selectedCountry, category: selectedCategory };
      setSelections([...selections, newSelection]);
      setSelectedCountry('');
      setSelectedCategory('');
      
      // Conditional routing
      if (selectedCategory === "Student") {
        router.push("/home-student"); //change this later
      } else if (selectedCategory === "Working") {
        router.push("/home-working");
      } else {
        router.push("/home-retiree");
      }
    } else {
      alert('Please select both a country and a category.');
    }

  };

  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full h-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0 flex items-left">
        <Image src="/boy.svg" fill alt="Boy" />
      </div>
      <div className="flex flex-col items-right gap-y-10">
        <h1 className="text-xl lg:text-4xl font-bold text-indigo-950 max-w-[480px] text-bottom">
          FinChamp
        </h1>
        <div>
          <div>
            <h2 className="text-xl lg:text-xl font-bold text-indigo-950 max-w-[480px] text-bottom margin-left-30">Select Country</h2>
            <div>
              <br />
            </div>
            <Button variant="option">
              <select
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </Button>
          </div>
          <div>
            <br />
            <br />
          </div>
          <div>
            <h2 className="text-xl lg:text-xl font-bold text-indigo-950 max-w-[480px] text-bottom margin-left-30">
              Select Category
            </h2>
            <div>
              <br />
            </div>
            <div className="category-buttons">
              <Button
                onClick={() => handleCategorySelection('Student')}
                variant={selectedCategory === 'Student' ? "primary" : "option"}
              >Student</Button>
              <Button
                onClick={() => handleCategorySelection('Working')}
                variant={selectedCategory === 'Working' ? "primary" : "option"}
              >Working</Button>
              <Button
                onClick={() => handleCategorySelection('Retiree')}
                variant={selectedCategory === 'Retiree' ? "primary" : "option"}
              >Retiree</Button>
            </div>
          </div>
          <div>
            <br />
          </div>
          <div>
            <br />
          </div>
          <div>
            <Button
              onClick={onNext}
              className="w-full"
              variant="secondary"
            >
              Next
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}
function setErrorMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
