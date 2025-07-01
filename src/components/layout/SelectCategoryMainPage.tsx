import React from "react";

import HeaderComponent from "./HeaderComponent";
import PlateCardsComponents from "../ui_controls/PlateCardsComponent";
import PlateCategoryCardsComponent from "../ui_controls/PlateCategoryCardsComponent";

const SelectCategoryMainPage: React.FC = () => {
  // Dummy data for now
  const appetizers = [
    { id: "1", name: "Spring Rolls" },
    { id: "2", name: "Chicken Wings" },
  ];

  // Dummy data for categories for now
  const plateCategories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Courses" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" },
    { id: 5, name: "Salads" },
    { id: 6, name: "Soups" },
    { id: 7, name: "Sandwiches" },
    { id: 8, name: "Pasta" },
    { id: 9, name: "Seafood" },
    { id: 10, name: "Grill" },
    { id: 11, name: "Vegan" },
    { id: 12, name: "Breakfast" },
    { id: 13, name: "Pizza" },
    { id: 14, name: "Kids Menu" },
    { id: 15, name: "Sides" },
    { id: 16, name: "Specials" },
    { id: 17, name: "Gluten-Free" },
    { id: 18, name: "Chef's Choice" },
  ];

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="sticky top-0 z-50 bg-white w-full rounded-b-2xl shadow-md shadow-gray-200 lg:border-b lg:border-gray-200 lg:shadow-none lg:static flex-shrink-0">
          <HeaderComponent />
        </div>

        {/* Mobile header - only visible on mobile */}
        <div className="w-full px-4 mt-2 lg:hidden">
          <h2 className="text-2xl font-bold text-center">Appetizers</h2>
        </div>

        {/* Desktop grid layout */}
        <div className="w-full h-full mt-3 flex flex-col lg:mt-0 lg:grid lg:grid-cols-12 lg:gap-6 min-h-0">
          {/* First div - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:flex-1 lg:overflow-y-auto lg:col-span-3 2xl:col-span-2 overflow-y-auto border-b border-r border-gray-100 shadow-lg shadow-black rounded-r-lg p-4">
            {/* Your first div content here */}
            <div className="space-y-2">
              {plateCategories.map((category) => (
                <PlateCategoryCardsComponent
                  key={category.id}
                  title={category.name}
                  category_id={category.id}
                />
              ))}
            </div>
          </div>

          {/* Selected category - full width on mobile, larger middle column on desktop */}
          <div className="w-full h-fit mx-auto flex flex-col items-center lg:w-[90%] lg:mt-4 lg:col-span-7 2xl:w-[80%] 2xl:col-span-8">
            {/* Desktop header - only visible on desktop */}
            <div className="hidden lg:block w-full mb-4 2xl:mb-6">
              <h2 className="px-6 text-2xl lg:text-4xl 2xl:text-5xl font-bold text-start">
                Appetizers
              </h2>
            </div>

            {/* Content */}
            <div className="w-full flex flex-col justify-center items-center">
              {appetizers.length > 0 ? (
                appetizers.map((item: any) => (
                  <PlateCardsComponents
                    key={item.id}
                    title={item.name}
                    plate_id={item.id}
                  />
                ))
              ) : (
                <span className="text-center block py-8">
                  No items available
                </span>
              )}
            </div>
            <div className="h-15 w-full lg:hidden"></div>
          </div>

          {/* Second div - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block lg:h-full lg:col-span-2 bg-invisible rounded-lg p-4"></div>
        </div>
      </div>
    </>
  );
};

export default SelectCategoryMainPage;
