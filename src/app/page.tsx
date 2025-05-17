import React from "react";

import PlateCardsComponents from "./components/PlateCardsComponent";

export default function Home() {
  const appetizers = [
    { id: 1, name: "Spring Rolls", price: "$5.99" },
    { id: 2, name: "Garlic Bread", price: "$3.99" },
    { id: 3, name: "Chicken Wings", price: "$7.99" },
    { id: 4, name: "Mozzarella Sticks", price: "$6.49" },
    { id: 5, name: "Stuffed Mushrooms", price: "$6.99" },
    { id: 6, name: "Bruschetta", price: "$5.49" },
    { id: 7, name: "Onion Rings", price: "$4.99" },
    { id: 8, name: "Fried Calamari", price: "$8.99" },
    { id: 9, name: "Potato Skins", price: "$5.99" },
  ];

  return (
    <>
      <div className="w-full px-4 mt-4">
        <h2 className="text-2xl font-bold">Appetizers</h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {appetizers.length > 0 ? (
          appetizers.map((item) => (
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
    </>
  );
}
