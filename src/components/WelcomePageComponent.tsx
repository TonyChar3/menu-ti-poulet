import React from "react";
import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";
import PlateCategoryCardsComponent from "./PlateCategoryCardsComponent";

const WelcomePageComponent: React.FC = () => {
  const plateCategories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" },
    { id: 5, name: "Salads" },
    { id: 6, name: "Soups" },
    { id: 7, name: "Soups" },
    { id: 8, name: "Soups" },
  ];

  return (
    <div className="min-h-full bg-white overflow-hidden">
      {/* Content container */}
      <div className="w-full h-full flex flex-col items-center justify-between p-6">
        {/* Top right icons */}
        <div className="absolute top-6 right-6 flex space-x-4">
          <CalendarClock size={24} className="text-gray-700" />
          <Phone size={24} className="text-gray-700" />
        </div>

        {/* Circular image/avatar placeholder */}
        <div className="mt-10 w-full flex flex-col items-center justify-center overflow-hidden">
          {/* You can add an <img> tag here when you have an image */}
          <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
              alt="Heading Image"
              width={100}
              height={100}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Restaurant Name */}
          <h1 className="mt-4 text-2xl font-bold text-gray-800">
            Restaurant name
          </h1>
        </div>

        {/* Buttons/rectangular elements */}
        <div className="w-full min-h-[40%] bg-disabled">
          {plateCategories.map((category) => (
            <PlateCategoryCardsComponent
              key={category.id}
              title={category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePageComponent;
