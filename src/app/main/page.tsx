"use client";
import React, { useEffect } from "react";
import BottomStickyNavComponent from "../../components/BottomStickyNavComponent";
import WelcomePageComponent from "@/components/WelcomePageComponent";
import { useLayout } from "@/context/LayoutContext";
import { motion } from "framer-motion";

import { MenuResponse } from "@/types/MenuItem";
import SelectCategoryMainPage from "@/components/SelectCategoryMainPage";

interface MainPageComponentProps {
  uid: string;
}

async function getMenuData(uid: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_MENU_DATA_URL}${uid}`);

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }
  const data = await res.json();
  return data;
}

const MainPage: React.FC<MainPageComponentProps> = ({ uid }) => {
  const {
    setWelcomePageOverlay,
    setMenuData,
    select_category,
    setMainPageLayout,
    main_page_layout,
  } = useLayout();

  useEffect(() => {
    if (uid) {
      getMenuData(uid)
        .then((data: MenuResponse) => {
          if (data.menu.mobile_layout.main_page) {
            setMainPageLayout(true);
            setWelcomePageOverlay(true);
            setMenuData(data.menu);
          } else if (data.menu.mobile_layout.hamburger_navigation) {
            setMainPageLayout(false);
            setMenuData(data.menu);
          }
        })
        .catch((err) => {
          console.error("Error fetching menu data:", err);
        });
    }
  }, [uid]);

  return (
    <>
      {main_page_layout && select_category.length <= 0 && (
        <motion.div
          key="welcome"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={"w-full h-full flex flex-col"}
        >
          <WelcomePageComponent />
        </motion.div>
      )}
      {main_page_layout && select_category.length > 0 && (
        <motion.div
          key="category"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <SelectCategoryMainPage />
        </motion.div>
      )}
      <BottomStickyNavComponent />
    </>
  );
};

export default MainPage;
