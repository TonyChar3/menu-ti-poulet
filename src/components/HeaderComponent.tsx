import React from "react";
// import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";

const HeaderComponent: React.FC = () => {
  return (
    <>
      {/* Top right icons */}
      {/* <div className="absolute top-6 right-1 flex space-x-4 z-10">
        <CalendarClock size={24} className="text-gray-700" />
        <Phone size={24} className="text-gray-700" />
      </div> */}

      {/* Circular image/avatar placeholder */}
      <div
        className={`w-full h-full p-3 flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}
      >
        <div
          className={`w-10 h-10 lg:w-20 lg:h-20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <Image
            src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
            alt="Heading Image"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
