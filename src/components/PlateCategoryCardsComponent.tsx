import React from "react";

interface PlateCategoryCardsComponentProps {
  // Define your props here if needed
  title: string;
}

const PlateCategoryCardsComponent: React.FC<
  PlateCategoryCardsComponentProps
> = ({ title }) => {
  return <div className="bg-gray-400 rounded-lg h-12">{title}</div>;
};

export default PlateCategoryCardsComponent;
