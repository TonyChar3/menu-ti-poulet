import React from "react";
import { useLayout } from "@/context/LayoutContext";
import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";

const HeaderComponent: React.FC = () => {
  const { scroll_extended } = useLayout();

  return (
    <>
      {/* Top right icons */}
      <div className="absolute top-6 right-6 flex space-x-4 z-10">
        <CalendarClock size={24} className="text-gray-700" />
        <Phone size={24} className="text-gray-700" />
      </div>

      {/* Circular image/avatar placeholder */}
      <div
        className={`w-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out ${
          scroll_extended ? "my-6 h-50" : "h-[100%] mt-10 justify-center"
        }`}
      >
        <div
          className={`${
            scroll_extended ? "w-20 h-20" : "w-32 h-32"
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
            scroll_extended ? "text-lg" : "text-2xl"
          } font-bold text-gray-800 transition-all duration-300 ease-in-out ${
            scroll_extended ? "mt-2" : "mt-4"
          }`}
        >
          Restaurant name
        </h1>
      </div>
    </>
  );
};

export default HeaderComponent;
