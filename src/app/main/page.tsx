"use client";
import React, { useEffect } from "react";
import PlateCardsComponents from "../../components/PlateCardsComponent";
import HeadingComponent from "../../components/HeadingComponent";
import BottomStickyNavComponent from "../../components/BottomStickyNavComponent";

import { MenuResponse } from "@/types/MenuItem";

interface MenuData {
  items: MenuResponse[];
}

interface MainPageComponentProps {
  uid: string;
}

async function getMenuData(uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_MENU_DATA_URL}${uid}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  console.log(data);
  return data;
}

const MainPage: React.FC<MainPageComponentProps> = ({ uid }) => {
  // Dummy data for now
  const appetizers = [
    { id: "1", name: "Spring Rolls" },
    { id: "2", name: "Chicken Wings" },
  ];

  useEffect(() => {
    if (uid) {
      getMenuData(uid)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error("Error fetching menu data:", err);
        });
    }
  }, [uid]);

  return (
    <>
      <div className="w-full flex flex-col items-center flex-1">
        <div className="w-full flex justify-center items-center sticky top-0 z-10 bg-white">
          <HeadingComponent title="Ti' Poulet" />
        </div>
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

      <BottomStickyNavComponent />
    </>
  );
};

export default MainPage;
