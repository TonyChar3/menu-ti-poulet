"use client";
import React from "react";
import { ChevronUp } from "lucide-react";

const BottomStickyNavComponent: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={`fixed left-0 z-20 transition-all duration-500 ${
        expanded
          ? "top-0 w-full h-full flex items-center justify-center bg-white rounded-none shadow-none"
          : "w-full flex flex-col sticky bottom-0 left-0"
      }`}
      style={expanded ? { borderRadius: 0 } : {}}
    >
      <div
        className={`flex justify-center items-center transition-all duration-500 ${
          expanded ? "w-full h-full flex-col bg-white" : "w-full"
        }`}
      >
        <div
          className={`${
            expanded
              ? "w-full h-full bg-white flex flex-col justify-center items-center rounded-none shadow-none"
              : "w-[40%] bg-white shadow-lg shadow-gray-300 flex flex-col justify-center items-center rounded-t-2xl"
          } transition-all duration-500`}
        >
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="focus:outline-none"
            aria-label="Expand menu"
          >
            <ChevronUp size={20} />
          </button>
          <div
            className={`w-[80%] sticky bottom-0 bg-primary-600 text-center rounded-t-2xl px-2 transition-all duration-500`}
          >
            <span className="text-xs font-medium text-white">
              Name of company
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStickyNavComponent;
