import React from "react";

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
      className="w-full md:w-[80%] flex justify-center items-center text-inherit"
    >
      <div className="w-full p-4 m-2 bg-white shadow-lg rounded-lg flex flex-col md:flex-row gap-2 md:gap-6 items-start md:items-center cursor-pointer transition hover:shadow-xl">
        {/* Text and Details Section */}
        <div className="flex-1 min-w-0 w-full">
          {/* Title */}
          <div className="flex justify-between items-center w-full gap-3">
            <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-gray-800">
              {title}
            </h3>
            <span className="text-md 2xl:text-lg font-bold">20.00$</span>
          </div>

          {/** Add ons */}
          <div className="mt-1 pl-2 flex-1 min-w-0 w-full flex justify-between items-center 2xl:mt-2">
            <span className="text-sm lg:text-md 2xl:text-lg">
              + add on to the plate
            </span>
            <span className="text-sm 2xl:text-lg">0.00$</span>
          </div>

          {/* <div className="mt-1 flex-1 min-w-0 w-full flex justify-between items-center">
            <span className="text-sm">+ add on to the plate</span>
            <span className="text-sm">0.00$</span>
          </div>

          <div className="mt-1 flex-1 min-w-0 w-full flex justify-between items-center">
            <span className="text-sm">+ add on to the plate</span>
            <span className="text-sm">0.00$</span>
          </div> */}

          {/* Options/Pills Container */}
          <div className="flex flex-wrap gap-1 mt-4">
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
