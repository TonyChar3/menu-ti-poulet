import React from "react";
import Image from "next/image";
import { CalendarClock, PhoneCall, Search } from "lucide-react";

interface HeadingComponentProps {
  title: string;
}

const HeadingComponent: React.FC<HeadingComponentProps> = ({ title }) => {
  return (
    <div className="bg-white shadow-sm shadow-gray-300 rounded-2xl w-[95%] flex flex-row justify-between items-center px-3">
      <div className="flex flex-row items-center gap-2 min-w-0">
        <div className="flex-shrink-0">
          <Image
            src="https://ik.imagekit.io/bqofr3ncj/Projects/POLUETMANIQUEPNG.png?updatedAt=1725557649846"
            alt="Heading Image"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h1 className="text-xl font-semibold truncate">{title}</h1>
      </div>

      <div className="flex-shrink-0 flex flex-row gap-4">
        <CalendarClock size={25} className="cursor-pointer" />
        <PhoneCall size={25} className="cursor-pointer" />
        <Search size={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HeadingComponent;
