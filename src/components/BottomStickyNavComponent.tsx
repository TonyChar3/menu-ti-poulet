"use client";
import React from "react";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { useLayout } from "@/context/LayoutContext";

const BottomStickyNavComponent: React.FC = () => {
  const {
    toggleWelcomePageOverlay,
    setSelectCategory,
    welcomePageOverlay,
    menu_data,
  } = useLayout();

  const ReturnAction = () => {
    if (menu_data?.mobile_layout.main_page) {
      toggleWelcomePageOverlay();
      setSelectCategory("");
    }
  };

  return (
    <>
      {!welcomePageOverlay && <div className="w-full h-15"></div>}

      {/* Bottom sticky nav */}
      <div
        className={`fixed bottom-0 w-[35%] shadow-md shadow-gray-300 rounded-t-3xl bg-white flex flex-col items-center transition-all duration-500 z-60`}
      >
        {/* Chevron button, only visible when not expanded */}
        {!welcomePageOverlay && (
          <Link
            href={`/?uid=${menu_data?.id}`}
            onClick={() => ReturnAction()}
            className="focus:outline-none mb-1"
            aria-label="Expand menu"
          >
            <ChevronUp size={25} />
          </Link>
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
