import React from "react";
import { useLayout } from "@/context/LayoutContext";

interface PlateCategoryCardsComponentProps {
  // Define your props here if needed
  title: string;
  category_id: number;
}

const PlateCategoryCardsComponent: React.FC<
  PlateCategoryCardsComponentProps
> = ({ title, category_id }) => {
  const { toggleWelcomePageOverlay, setSelectCategory } = useLayout();

  const CategorySelected = () => {
    setSelectCategory(category_id.toString());
    toggleWelcomePageOverlay();
  };

  return (
    <div
      onClick={() => CategorySelected()}
      className="w-full bg-gray-200 rounded-lg p-4 mb-3 shadow-md text-center md:mx-auto md:p-6 md:mb-4 2xl:mb-5 md:w-[90%]"
    >
      <h3 className="text-lg lg:text-xl font-semibold text-gray-700">
        {title}
      </h3>
    </div>
  );
};

export default PlateCategoryCardsComponent;
