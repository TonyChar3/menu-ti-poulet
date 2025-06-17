"use client";
import React, { useState } from "react";
import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";
import PlateCategoryCardsComponent from "./PlateCategoryCardsComponent";

const WelcomePageComponent: React.FC = () => {
  const [is_expanded, setIsExpanded] = useState(false);

  const plateCategories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" },
    { id: 5, name: "Salads" },
    { id: 6, name: "Soups" },
    { id: 7, name: "Sandwiches" },
    { id: 8, name: "Pasta" },
    { id: 9, name: "Seafood" },
    { id: 10, name: "Grill" },
    { id: 11, name: "Vegan" },
    { id: 12, name: "Breakfast" },
    { id: 13, name: "Pizza" },
    { id: 14, name: "Kids Menu" },
    { id: 15, name: "Sides" },
    { id: 16, name: "Specials" },
    { id: 17, name: "Gluten-Free" },
    { id: 18, name: "Chef's Choice" },
  ];

  const visibleCategories = is_expanded
    ? plateCategories
    : plateCategories.length > 5
    ? plateCategories
    : plateCategories.slice(0, 5);

  const handleWheel = (e: React.WheelEvent) => {
    if (plateCategories.length > 4 && !is_expanded) {
      e.preventDefault();
      setIsExpanded(true);
    }
  };

  const handleTouchStart = () => {
    if (plateCategories.length > 4 && !is_expanded) {
      setIsExpanded(true);
    }
  };

  return (
    <>
      {/* main cover */}
      <div className={`w-full h-full flex flex-col px-6 pt-6`}>
        {/* Top right icons */}
        <div className="absolute top-6 right-6 flex space-x-4 z-10">
          <CalendarClock size={24} className="text-gray-700" />
          <Phone size={24} className="text-gray-700" />
        </div>

        {/* Circular image/avatar placeholder */}
        <div
          className={`w-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
            is_expanded ? "my-6 h-50" : "h-[100%] mt-10 justify-center"
          }`}
        >
          <div
            className={`${
              is_expanded ? "w-20 h-20" : "w-32 h-32"
            } rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <Image
              src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
              alt="Heading Image"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Restaurant Name */}
          <h1
            className={`${
              is_expanded ? "text-lg" : "text-2xl"
            } font-bold text-gray-800 transition-all duration-300 ease-in-out ${
              is_expanded ? "mt-2" : "mt-4"
            }`}
          >
            Restaurant name
          </h1>
        </div>

        {/* Buttons/rectangular elements */}
        <div
          className={`w-full bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ease-in-out ${
            is_expanded ? "flex-1" : "overflow-hidden"
          } border border-gray-300`}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          style={{
            height: is_expanded ? "auto" : "fit-content",
            maxHeight: is_expanded ? "none" : "50%",
            minHeight: plateCategories.length > 5 ? "" : "50%",
          }}
        >
          {visibleCategories.map((category) => (
            <PlateCategoryCardsComponent
              key={category.id}
              title={category.name}
              category_id={category.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default WelcomePageComponent;
