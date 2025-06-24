import React from "react";

interface WelcomePageControlsButtonProps {
  text: string;
  icon: React.ReactElement;
}

const WelcomePageControlsButtonComponent: React.FC<
  WelcomePageControlsButtonProps
> = ({ text, icon }) => {
  return (
    <button className="flex-1 mx-2 md:mx-10 px-2 py-2 flex justify-center items-center border border-gray-300 rounded-4xl">
      {icon}
      <span className="ml-2 text-sm">{text}</span>
    </button>
  );
};

export default WelcomePageControlsButtonComponent;
