"use client";
import React, { useState } from "react";
import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";

import PlateCategoryCardsComponent from "./PlateCategoryCardsComponent";
import WelcomePageControlsButtonComponent from "./WelcomePageControlsButtonComponent";

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

  const handleWheel = () => {
    if (plateCategories.length > 4 && !is_expanded) {
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
      <div className="w-full h-full flex flex-col relative">
        {/* Top right icons */}
        <div className="hidden absolute top-6 right-6 lg:flex space-x-4 z-10">
          <CalendarClock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-700" />
        </div>

        {/* Header section - fixed height */}
        <div
          className={`w-full flex flex-col justify-center items-center px-6 transition-all duration-300 ease-in-out ${
            is_expanded
              ? "pt-6 pb-4 lg:pt-8 lg:pb-6"
              : "h-[50%] md:h-[50%] 2xl:h-[60%] pt-10 pb-6 lg:pt-16 lg:pb-8"
          }`}
        >
          {/* Circular image/avatar */}
          <div
            className={`${
              is_expanded
                ? "w-16 h-16 lg:w-20 lg:h-20"
                : "w-28 h-28 md:w-40 md:h-40 lg:w-45 lg:h-45"
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
              is_expanded
                ? "text-lg lg:text-xl"
                : "text-xl md:text-2xl lg:text-3xl 2xl:text-4xl"
            } font-bold text-gray-800 transition-all duration-300 ease-in-out ${
              is_expanded ? "mt-2" : "mt-3 lg:mt-4"
            }`}
          >
            Restaurant name
          </h1>
        </div>

        {/* Content section - flexible height */}
        <div
          className={`flex-1 flex justify-center items-end ${
            is_expanded ? "pb-8" : "h-[40%] lg:h-[30%]"
          }`}
        >
          <div
            className={`w-full lg:w-[60%] xl:w-[50%] bg-white rounded-t-4xl lg:rounded-t-2xl shadow-lg transition-all duration-300 ease-in-out border border-gray-300 ${
              is_expanded
                ? "px-4 pb-4 lg:py-4 h-full overflow-y-auto rounded-b-4xl mb:rounded-b-2xl"
                : "px-6 pb-6 max-h-[40vh] lg:py-4 lg:max-h-[50vh] overflow-hidden"
            }`}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            style={{
              minHeight: is_expanded
                ? "0"
                : plateCategories.length > 5
                ? "40vh"
                : "30vh",
            }}
          >
            <div className="flex justify-between items-center w-full md:w-[80%] mt-2 mb-3 p-2 md:mt-4 md:mb-6 md:mx-auto lg:hidden rounded-xl">
              <WelcomePageControlsButtonComponent
                icon={<CalendarClock size={24} className="text-gray-700" />}
                text={"horaire"}
              />
              <WelcomePageControlsButtonComponent
                icon={<Phone size={24} className="text-gray-700" />}
                text={"information"}
              />
            </div>
            {visibleCategories.map((category) => (
              <PlateCategoryCardsComponent
                key={category.id}
                title={category.name}
                category_id={category.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePageComponent;
