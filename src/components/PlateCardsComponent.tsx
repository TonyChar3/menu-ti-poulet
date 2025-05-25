import React from "react";
import Image from "next/image";

interface PlateCardsComponentProps {
  title: string;
  plate_id: number;
}

const PlateCardsComponent: React.FC<PlateCardsComponentProps> = ({
  title,
  plate_id,
}) => {
  return (
    <a
      href={`pages/plates/${plate_id}`}
      className="block"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="p-3 m-2 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-3 md:gap-6 items-start md:items-center cursor-pointer transition hover:shadow-xl">
        {/* Image Section */}
        <div className="w-full md:w-32 lg:w-1/3 flex-shrink-0 aspect-w-2 aspect-h-1 md:aspect-w-1 md:aspect-h-1 mb-3 md:mb-0">
          <Image
            src="https://ik.imagekit.io/bqofr3ncj/Projects/pexels-mikebirdy-112460.jpg?updatedAt=1735949794385"
            alt="Plate"
            width={300}
            height={200}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        {/* Text and Details Section */}
        <div className="flex-1 min-w-0 w-full">
          {/* Title */}
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-base md:text-2xl font-medium text-gray-800">
              {title}
            </h3>
            <span className="text-xs font-light">20.00$</span>
          </div>

          {/* Options/Pills Container */}
          <div className="flex flex-wrap gap-1">
            <div className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>size options</span>
            </div>
            <div className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>combos</span>
            </div>
            <div className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>vegan</span>
            </div>
            <div className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>vegan</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlateCardsComponent;
