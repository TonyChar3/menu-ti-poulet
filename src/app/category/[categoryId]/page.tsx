"use client";
import React from "react";
import SelectCategoryMainPage from "@/components/SelectCategoryMainPage";
import BottomStickyNavComponent from "@/components/BottomStickyNavComponent";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center">
        <SelectCategoryMainPage />
        <BottomStickyNavComponent />
      </div>
    </>
  );
};

export default CategoryPage;
