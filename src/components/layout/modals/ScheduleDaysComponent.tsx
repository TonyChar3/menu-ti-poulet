import React from "react";

interface ScheduleDaysComponentProps {
  day: string;
}

const ScheduleDaysComponent: React.FC<ScheduleDaysComponentProps> = ({
  day,
}) => {
  return (
    <div className="w-full mt-2 md:mt-4 lg:p-1 bg-white flex justify-between items-center rounded-2xl shadow-lg shadow-gray-300">
      <div className="w-[35%] p-1 flex justify-center items-center rounded-tl-2xl rounded-bl-2xl">
        <span className="font-bold md:text-lg lg:text-xl">{day}</span>
      </div>
      <div className="w-[65%] p-1 bg-gray-600 border border-white flex justify-center items-center rounded-tr-2xl rounded-br-2xl">
        <span className="text-white font-medium md:text-lg">11:00 - 8:30</span>
      </div>
    </div>
  );
};

export default ScheduleDaysComponent;
