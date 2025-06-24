import React from "react";

import HeaderComponent from "./HeaderComponent";
import PlateCardsComponents from "../components/PlateCardsComponent";

const SelectCategoryMainPage: React.FC = () => {
  // Dummy data for now
  const appetizers = [
    { id: "1", name: "Spring Rolls" },
    { id: "2", name: "Chicken Wings" },
  ];
  return (
    <div className="w-full flex flex-col items-center flex-1">
      <HeaderComponent />
      <div className="w-full px-4 mt-4">
        <h2 className="text-2xl font-bold">Appetizers</h2>
      </div>
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
          <span>No items available</span>
        )}
      </div>
    </div>
  );
};

export default SelectCategoryMainPage;
