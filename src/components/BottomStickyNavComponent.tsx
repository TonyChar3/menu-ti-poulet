"use client";
import React from "react";
import { ChevronUp } from "lucide-react";
import WelcomePageComponent from "./WelcomePageComponent";

const BottomStickyNavComponent: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      {/* Fullscreen overlay with smooth up/down animation */}
      <div
        className={`fixed inset-0 z-50 w-full h-full bg-white flex flex-col transition-transform duration-500 ease-in-out ${
          expanded ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          transform: expanded ? "translateY(0%)" : "translateY(100%)",
        }}
      >
        <WelcomePageComponent />
      </div>

      {!expanded && <div className="w-full h-15"></div>}

      {/* Bottom sticky nav */}
      <div
        className={`${
          expanded ? "sticky bottom-0" : "fixed bottom-0"
        } w-[35%] shadow-md shadow-gray-300 rounded-t-3xl bg-white flex flex-col items-center transition-all duration-500 z-60`}
      >
        {/* Chevron button, only visible when not expanded */}
        {!expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="focus:outline-none mb-1"
            aria-label="Expand menu"
          >
            <ChevronUp size={25} />
          </button>
        )}

        {/* Name of company bar, always at the bottom, same size */}
        <div className="w-[90%] bg-primary-600 text-center rounded-t-2xl">
          <span className="text-xs font-medium text-white">
            Name of company
          </span>
        </div>
      </div>
    </>
  );
};

export default BottomStickyNavComponent;
