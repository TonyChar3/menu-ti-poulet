import React from "react";
import { useLayout } from "@/context/LayoutContext";

interface WelcomePageControlsButtonProps {
  text: string;
  icon: React.ReactElement;
}

const WelcomePageControlsButtonComponent: React.FC<
  WelcomePageControlsButtonProps
> = ({ text, icon }) => {
  const { toggleInfoScheduleMobileModal, setModalMode } = useLayout();
  return (
    <button
      onClick={() => {
        toggleInfoScheduleMobileModal();
        setModalMode(text);
      }}
      className="flex-1 mx-2 md:mx-10 lg:mx-2 px-2 py-2 flex justify-center items-center border border-gray-300 rounded-4xl cursor-pointer"
    >
      {icon}
      <span className="ml-2 text-sm">{text}</span>
    </button>
  );
};

export default WelcomePageControlsButtonComponent;
