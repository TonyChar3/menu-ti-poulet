import React from "react";
import { CalendarClock, Phone } from "lucide-react";
import Image from "next/image";
import { ConstantsVariables } from "@/helpers/ConstantsVariables";

import WelcomePageControlsButtonComponent from "../ui_controls/buttons/WelcomePageControlsButtonComponent";

const HeaderComponent: React.FC = () => {
  return (
    <>
      {/* Circular image/avatar placeholder */}
      <div
        className={`relative w-full h-full p-3 flex flex-col justify-center items-center transition-all duration-300 ease-in-out`}
      >
        {/* Top right icons */}
        <div className="hidden absolute top-6 right-6 lg:flex space-x-4 z-10">
          <WelcomePageControlsButtonComponent
            icon={<CalendarClock size={24} className="text-gray-700" />}
            text={ConstantsVariables.SCHEDULE_MODE_FR}
          />
          <WelcomePageControlsButtonComponent
            icon={<Phone size={24} className="text-gray-700" />}
            text={ConstantsVariables.INFO_MODE_FR}
          />
        </div>
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
