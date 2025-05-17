"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PlatePage = () => {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex items-center mb-2">
        <button
          onClick={handleReturn}
          className="flex items-center gap-2 px-3 py-1 text-gray-700 rounded transition duration-200 ease-in-out"
        >
          <span className="text-lg">&larr;</span>
          <span className="text-sm font-medium">Back to Plates</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image Section */}
        <div className="md:w-1/2 flex-shrink-0">
          <Image
            src="https://ik.imagekit.io/bqofr3ncj/Projects/pexels-mikebirdy-112460.jpg?updatedAt=1735949794385"
            alt="Plate"
            width={600}
            height={400}
            className="object-cover w-full h-64 md:h-80 rounded-md"
            priority
          />
        </div>
        {/* Details Section */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Plate Name</h3>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc,
              eget aliquam massa erat at dui. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
          <div className="mb-4">
            <span className="text-xl font-bold text-green-600">19.99$</span>
          </div>
          {/* Options/Pills Container */}
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>size options</span>
            </div>
            <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>combos</span>
            </div>
            <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>vegan</span>
            </div>
            <div className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">
              <span>vegan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatePage;
